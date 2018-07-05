import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/BookPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import BookPagePreview from './preview-templates/BookPagePreview'


CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('romantic-comedy-of-errors', BooksPagePreview)
CMS.registerPreviewTemplate('technically-scripted', BookPagePreview)
