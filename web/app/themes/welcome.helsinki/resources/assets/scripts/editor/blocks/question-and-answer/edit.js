import PropTypes from 'prop-types'
import { __ } from '@wordpress/i18n'
import {
  InspectorControls,
  InnerBlocks,
} from '@wordpress/block-editor'
import {
  PanelBody,
  PanelRow,
  RadioControl,
} from '@wordpress/components'

const DOMAIN = 'hds'
const CLASS_NAME = `wp-block-${DOMAIN}-question-and-answer`

function BlockEdit({
  attributes,
  setAttributes,
}) {
  const { style = 'info', question } = attributes

  return (
    <div class={`${CLASS_NAME} is-style-${style}`}>
      <div class={`${CLASS_NAME}__question`}>
        <input
          type="text"
          autoFocus
          className={`${CLASS_NAME}__question`}
          placeholder={__('Enter question', DOMAIN)}
          value={question || ''}
          onChange={({target: {value: question}}) => {
            setAttributes({question})
          }}
        />
      </div>
      <div class={`${CLASS_NAME}__answer`}>
        <InnerBlocks />
      </div>
      <InspectorControls>
        <PanelBody>
          <PanelRow>
            <RadioControl
              label={__('Style', DOMAIN)}
              selected={style}
              onChange={value => setAttributes({style: value})}
              options={[{
                label: 'Info',
                value: 'info',
              }, {
                label: 'Tip',
                value: 'tip',
              }]}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    </div>
  )
}
BlockEdit.displayName = 'QuestionAndAnswerBlockEdit'
BlockEdit.propTypes = {
  attributes: PropTypes.shape({
    style: PropTypes.string,
    question: PropTypes.string,
  }).isRequired,
  setAttributes: PropTypes.func.isRequired,
}

export default BlockEdit
