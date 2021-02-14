import PropTypes from 'prop-types'
import { __ } from '@wordpress/i18n'
import {
  InnerBlocks,
} from '@wordpress/block-editor'

const DOMAIN = 'hds'
const CLASS_NAME = `wp-block-${DOMAIN}-question-and-answer`

function BlockEdit({
  attributes,
  setAttributes,
}) {
  const { question } = attributes

  return (
    <div class={`${CLASS_NAME}`}>
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
    </div>
  )
}
BlockEdit.displayName = 'QuestionAndAnswerBlockEdit'
BlockEdit.propTypes = {
  attributes: PropTypes.shape({
    question: PropTypes.string,
  }).isRequired,
  setAttributes: PropTypes.func.isRequired,
}

export default BlockEdit
