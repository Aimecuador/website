"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var pdf_lib_1 = require("pdf-lib");
var sharp = require("sharp");
// Define paths
var PDF_PATH = path.join(process.cwd(), "assets/blogs.pdf");
var OUTPUT_DIR = path.join(process.cwd(), "public/images/blog");
// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}
function extractPDFPages() {
    return __awaiter(this, void 0, void 0, function () {
        var pdfBytes, pdfDoc, pageCount, i, singlePageDoc, copiedPage, tempPdfPath, singlePageBytes, outputPath, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 9, , 10]);
                    pdfBytes = fs.readFileSync(PDF_PATH);
                    return [4 /*yield*/, pdf_lib_1.PDFDocument.load(pdfBytes)
                        // Get the number of pages
                    ];
                case 1:
                    pdfDoc = _a.sent();
                    pageCount = pdfDoc.getPageCount();
                    console.log("PDF has ".concat(pageCount, " pages"));
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < pageCount)) return [3 /*break*/, 8];
                    return [4 /*yield*/, pdf_lib_1.PDFDocument.create()];
                case 3:
                    singlePageDoc = _a.sent();
                    return [4 /*yield*/, singlePageDoc.copyPages(pdfDoc, [i])];
                case 4:
                    copiedPage = (_a.sent())[0];
                    singlePageDoc.addPage(copiedPage);
                    tempPdfPath = path.join(OUTPUT_DIR, "temp_page_".concat(i + 1, ".pdf"));
                    return [4 /*yield*/, singlePageDoc.save()];
                case 5:
                    singlePageBytes = _a.sent();
                    fs.writeFileSync(tempPdfPath, singlePageBytes);
                    outputPath = path.join(OUTPUT_DIR, "blog-".concat(i + 1, ".webp"));
                    // Create a simple colored rectangle as a placeholder
                    // In a real implementation, you would render the PDF page properly
                    return [4 /*yield*/, sharp({
                            create: {
                                width: 800,
                                height: 1200,
                                channels: 4,
                                background: { r: 255, g: 255, b: 255, alpha: 1 },
                            },
                        })
                            .composite([
                            {
                                input: Buffer.from("<svg width=\"800\" height=\"1200\">\n            <rect width=\"800\" height=\"1200\" fill=\"white\"/>\n            <text x=\"400\" y=\"600\" fontFamily=\"Arial\" fontSize=\"24\" textAnchor=\"middle\" fill=\"black\">\n              Blog Page ".concat(i + 1, "\n            </text>\n          </svg>")),
                                top: 0,
                                left: 0,
                            },
                        ])
                            .webp({ quality: 80 })
                            .toFile(outputPath)
                        // Clean up temporary file
                    ];
                case 6:
                    // Create a simple colored rectangle as a placeholder
                    // In a real implementation, you would render the PDF page properly
                    _a.sent();
                    // Clean up temporary file
                    fs.unlinkSync(tempPdfPath);
                    console.log("Processed page ".concat(i + 1, "/").concat(pageCount));
                    _a.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 2];
                case 8:
                    console.log("PDF extraction completed successfully!");
                    return [3 /*break*/, 10];
                case 9:
                    error_1 = _a.sent();
                    console.error("Error extracting PDF pages:", error_1);
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    });
}
// Run the extraction
extractPDFPages();
// Note: In a real implementation, you would need to use a more robust
// approach to render PDF pages as images, such as using puppeteer to
// screenshot each page or a dedicated PDF rendering library.
