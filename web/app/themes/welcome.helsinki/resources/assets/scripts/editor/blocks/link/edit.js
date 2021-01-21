import classnames from 'classnames'
import PropTypes from 'prop-types'
import { __ } from '@wordpress/i18n'
import {
  InspectorControls,
  URLInput,
} from '@wordpress/block-editor'
import {
  CheckboxControl,
  PanelBody,
  PanelRow,
} from '@wordpress/components'

const DOMAIN = 'hds'
const CLASS_NAME = `${DOMAIN}-link`

function BlockEdit({
  attributes,
  setAttributes,
}) {
  const { isCompact = false, text, url, isExternal } = attributes

  return (
    <>
      <a
        className={classnames([
          `${CLASS_NAME}`,
          isCompact && 'compact',
        ])}
      >
        <div
          className={classnames([
            `${CLASS_NAME}__icon`,
            'hds-icon',
            isExternal ? 'hds-icon--link-external' : 'hds-icon--arrow-right',
          ])}
          onClick={() => {
            setAttributes({isExternal: !isExternal})
          }}
        />
        <input
          type="text"
          autoFocus
          className={`${CLASS_NAME}__text-input`}
          placeholder={__('Enter text', DOMAIN)}
          value={text}
          onChange={({target: {value: text}}) => {
            setAttributes({text})
          }}
        />
      </a>
      <URLInput
        autoFocus={false}
        placeholder={__('Enter link', DOMAIN)}
        tagName="div"
        className={`${CLASS_NAME}__url-input`}
        value={url}
        type="string"
        onChange={url => {
          setAttributes({url})
        }}
      />
      <InspectorControls>
        <PanelBody>
          <PanelRow>
            <CheckboxControl
              label={__('Small font', DOMAIN)}
              value={isCompact}
              onChange={isCompact => setAttributes({isCompact})}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    </>
  )
}
BlockEdit.displayName = 'LinkBlockEdit'
BlockEdit.propTypes = {
  attributes: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
    isExternal: PropTypes.bool,
    isCompact: PropTypes.bool,
  }).isRequired,
  setAttributes: PropTypes.func.isRequired,
}

export default BlockEdit
