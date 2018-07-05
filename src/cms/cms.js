import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import BookPagePreview from './preview-templates/BookPagePreview'
import BooksPagePreview from './preview-templates/BooksPagePreview'



CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('romantic-comedy-of-errors', BooksPagePreview)
CMS.registerPreviewTemplate('technically-scripted', BookPagePreview)
