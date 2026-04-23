import { readdir, readFile, writeFile, mkdir } from 'fs/promises'
import { optimize } from 'svgo'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ICONS_PATH = path.join(__dirname, '../icons')
const COMPONENTS_PATH = path.join(__dirname, '../components/icons')
const TEMPLATE_PATH = path.join(__dirname, '../components/icons/ComponentTemplate.vue')

try {
  await mkdir(ICONS_PATH, { recursive: true })
} catch (error) {
  // Directory may already exist
}

const files = await readdir(ICONS_PATH)
const svgFiles = files.filter(f => f.endsWith('.svg'))

const ComponentTemplateData = await readFile(TEMPLATE_PATH, 'utf8')

let indexFileContent = ''

for (const file of svgFiles) {
  const iconPath = path.join(ICONS_PATH, file)

  let iconContent = await readFile(iconPath, 'utf8')

  iconContent = optimizeIconContent(iconContent)

  await writeFile(iconPath, iconContent)

  await createIconComponent(file, iconContent)
}

await writeFile(
  path.join(COMPONENTS_PATH, 'index.ts'),
  indexFileContent || '// Auto-generated icon components index\n'
)

console.log(`✓ Generated ${svgFiles.length} icon components`)

function optimizeIconContent(iconContent: string) {
  const { data } = optimize(iconContent, {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            convertColors: {
              currentColor: true
            }
          }
        }
      },
      'removeViewBox'
    ]
  })

  return data || iconContent
}

async function createIconComponent(file: string, iconContent: string) {
  const fileName = file.split('.').slice(0, -1).join('')
  const iconComponentName = pascalize(`${fileName}Icon`)

  indexFileContent += `export { default as Eos${iconComponentName} } from './${iconComponentName}.vue'\n`

  // Remove width/height attributes to use viewBox for scaling
  let componentContent = iconContent.replace(/(width=".*?"\s)|(height=".*?"\s)/g, '')

  const fullComponent = ComponentTemplateData.replace('<template>', `<template>\n${componentContent}\n`)

  await writeFile(
    path.join(COMPONENTS_PATH, `${iconComponentName}.vue`),
    fullComponent
  )
}

function camelize(value: string) {
  return value.replace(/[\W_]$/, '').replace(/[\W_]([a-zA-Z0-9])/g, (_, x) => x.toUpperCase())
}

function pascalize(value: string) {
  let trimmed = value.trim()
  return trimmed[0].toUpperCase() + camelize(trimmed.slice(1))
}
