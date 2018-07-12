import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import BookPagePreview from './preview-templates/BookPagePreview'
import BooksPagePreview from './preview-templates/BooksPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import PrivacyPagePreview from './preview-templates/PrivacyPagePreview'



CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('privacy', PrivacyPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('romantic-comedy-of-errors', BooksPagePreview)
CMS.registerPreviewTemplate('the-runaway', BookPagePreview)
