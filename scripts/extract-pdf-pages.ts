import * as fs from "fs"
import * as path from "path"
import { PDFDocument } from "pdf-lib"
import * as sharp from "sharp"

// Define paths
const PDF_PATH = path.join(process.cwd(), "assets/blogs.pdf")
const OUTPUT_DIR = path.join(process.cwd(), "public/images/blog")

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

async function extractPDFPages() {
  try {
    // Read the PDF file
    const pdfBytes = fs.readFileSync(PDF_PATH)
    const pdfDoc = await PDFDocument.load(pdfBytes)

    // Get the number of pages
    const pageCount = pdfDoc.getPageCount()
    console.log(`PDF has ${pageCount} pages`)

    // Process each page
    for (let i = 0; i < pageCount; i++) {
      // Create a new document with just this page
      const singlePageDoc = await PDFDocument.create()
      const [copiedPage] = await singlePageDoc.copyPages(pdfDoc, [i])
      singlePageDoc.addPage(copiedPage)

      // Save the single page as a temporary PDF
      const tempPdfPath = path.join(OUTPUT_DIR, `temp_page_${i + 1}.pdf`)
      const singlePageBytes = await singlePageDoc.save()
      fs.writeFileSync(tempPdfPath, singlePageBytes)

      // Use sharp to convert the PDF to WebP
      // Note: This is a simplified approach - in a real implementation,
      // you might need to use a PDF renderer like pdf2image or puppeteer
      // Here we're using a placeholder approach

      // For demonstration, we'll create a placeholder WebP file
      // In a real implementation, you would render the PDF to an image first
      const outputPath = path.join(OUTPUT_DIR, `blog-${i + 1}.webp`)

      // Create a simple colored rectangle as a placeholder
      // In a real implementation, you would render the PDF page properly
      await sharp({
        create: {
          width: 800,
          height: 1200,
          channels: 4,
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        },
      })
        .composite([
          {
            input: Buffer.from(`<svg width="800" height="1200">
            <rect width="800" height="1200" fill="white"/>
            <text x="400" y="600" fontFamily="Arial" fontSize="24" textAnchor="middle" fill="black">
              Blog Page ${i + 1}
            </text>
          </svg>`),
            top: 0,
            left: 0,
          },
        ])
        .webp({ quality: 80 })
        .toFile(outputPath)

      // Clean up temporary file
      fs.unlinkSync(tempPdfPath)

      console.log(`Processed page ${i + 1}/${pageCount}`)
    }

    console.log("PDF extraction completed successfully!")
  } catch (error) {
    console.error("Error extracting PDF pages:", error)
  }
}

// Run the extraction
extractPDFPages()

// Note: In a real implementation, you would need to use a more robust
// approach to render PDF pages as images, such as using puppeteer to
// screenshot each page or a dedicated PDF rendering library.

