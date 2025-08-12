export default function printCards(nodes: HTMLElement[]) {
  const printWindow = window.open('', '', 'width=800,height=600')
  if (!printWindow) return

  printWindow.addEventListener('load', () => {
    printWindow.focus()
    printWindow.print()
    printWindow.close()
  })

  const base = `<base href="${location.origin}/">`
  const headStyles = Array.from(
    document.head.querySelectorAll('link[rel="stylesheet"], style')
  )
    .map((el) => el.outerHTML)
    .join('')

  const body = nodes
    .map((node) => {
      const clone = node.cloneNode(true) as HTMLElement
      clone.querySelectorAll('img').forEach((img) => {
        const src = img.getAttribute('src')
        if (src) img.src = new URL(src, location.origin).href
      })
      return clone.outerHTML
    })
    .join('')

  const doc = printWindow.document
  doc.open()
  doc.write(
    `<html><head><title>Cards</title>${base}${headStyles}</head><body>${body}</body></html>`
  )
  doc.close()
}
