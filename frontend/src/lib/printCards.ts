export default function printCards(nodes: HTMLElement[]) {
  const printWindow = window.open('', '', 'width=800,height=600')
  if (!printWindow) return
  const doc = printWindow.document
  doc.write('<html><head><title>Cards</title></head><body>')
  nodes.forEach((node) => {
    const clone = node.cloneNode(true) as HTMLElement
    doc.body.appendChild(clone)
  })
  doc.write('</body></html>')
  doc.close()
  printWindow.focus()
  printWindow.print()
  printWindow.close()
}
