import {registerBlockType} from '@wordpress/blocks'
import {__} from '@wordpress/i18n'

import edit from './edit'
import {save} from './save'
import {name, category, attributes} from './block.json'

registerBlockType(name, {
  title: __('Accordion', 'hds'),
  description: __('Display content that can be toggled open or closed', 'hds'),
  category,
  parent: null,
  supports: {
    align: true,
    alignWide: true,
    customClassName: true,
    html: false,
    inserter: true,
    multiple: true,
    reusable: false,
  },
  attributes,
  edit,
  save,
})
