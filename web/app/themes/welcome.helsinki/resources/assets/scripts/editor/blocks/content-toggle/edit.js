import PropTypes from 'prop-types'
import { __ } from '@wordpress/i18n'
import {
  InnerBlocks,
} from '@wordpress/block-editor'

const DOMAIN = 'hds'
const CLASS_NAME = `wp-block-${DOMAIN}-content-toggle`

function BlockEdit({
  attributes,
  setAttributes,
}) {
  const { text } = attributes

  return (
    <div class={`${CLASS_NAME}`}>
      <div class={`${CLASS_NAME}__toggle`}>
        <input
          type="text"
          autoFocus
          className={`${CLASS_NAME}__text`}
          placeholder={__('Enter text', DOMAIN)}
          value={text || ''}
          onChange={({target: {value: text}}) => {
            setAttributes({text})
          }}
        />
        <div class="wp-block-hds-content-toggle__icon hds-icon hds-icon--angle-down">
        </div>
      </div>
      <div class="wp-block-hds-content-toggle__content">
        <InnerBlocks />
      </div>
    </div>
  )
}
BlockEdit.displayName = 'ContentToggleBlockEdit'
BlockEdit.propTypes = {
  attributes: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
  setAttributes: PropTypes.func.isRequired,
}

export default BlockEdit
