import classnames from 'classnames'
import PropTypes from 'prop-types'
import { __ } from '@wordpress/i18n'
import {
  InspectorControls,
  RichText,
  withColors,
  __experimentalPanelColorGradientSettings as PanelColorGradientSettings,
} from '@wordpress/block-editor'
import {
  PanelBody,
  PanelRow,
  RadioControl,
} from '@wordpress/components'

const DOMAIN = 'hds'
const CLASS_NAME = `wp-block-${DOMAIN}-icon-and-text`

import icons from '../../../icons'

function BlockEdit({
  attributes,
  setAttributes,
  iconColor,
  setIconColor,
  textColor,
  setTextColor,
  backgroundColor,
  setBackgroundColor,
}) {
  const { iconName, heading, body } = attributes

  return (
    <div
      className={classnames(
        CLASS_NAME,
        backgroundColor.class,
        !!backgroundColor.class && 'has-background-color'
      )}
    >
      <div
        className={classnames(
          `${CLASS_NAME}__icon`,
          'hds-icon',
          `hds-icon--${iconName}`,
          iconColor.class,
        )}
      />
      <RichText
        placeholder={__('Enter heading', DOMAIN)}
        tagName="div"
        className={`${CLASS_NAME}__heading ${textColor.class}`}
        value={heading}
        onChange={heading => setAttributes({heading})}
      />
      <RichText
        placeholder={__('Enter body text', DOMAIN)}
        tagName="div"
        className={`${CLASS_NAME}__body ${textColor.class}`}
        value={body}
        onChange={body => setAttributes({body})}
      />
      <InspectorControls>
        <PanelColorGradientSettings
          title={ __( 'Text Color' ) }
          settings={[
            {
              colorValue: backgroundColor.color,
              onColorChange: setBackgroundColor,
              label: __('Background color'),
            },
            {
              colorValue: iconColor.color,
              onColorChange: setIconColor,
              label: __('Icon color'),
            },
            {
              colorValue: textColor.color,
              onColorChange: setTextColor,
              label: __('Text color'),
            },
          ]}
        >
        </PanelColorGradientSettings>
        <PanelBody>
          <PanelRow>
            <RadioControl
              label={__('Icon', DOMAIN)}
              selected={iconName}
              onChange={value => setAttributes({iconName: value})}
              options={icons.map(name => ({
                label: (
                  <i
                    className={classnames(
                      'hds-icon',
                      `hds-icon--${name}`,
                    )}
                    style={{
                      display: 'inline-block',
                      width: '30px',
                      height: '30px',
                      color: iconColor.color,
                    }}
                  />
                ),
                value: name,
              }))}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    </div>
  )
}
BlockEdit.displayName = 'IconAndTextBlockEdit'
BlockEdit.propTypes = {
  attributes: PropTypes.shape({
    iconName: PropTypes.string,
    heading: PropTypes.string,
    body: PropTypes.string,
    iconColor: PropTypes.string,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
  }).isRequired,
  setAttributes: PropTypes.func.isRequired,
}

export default withColors(
  'backgroundColor',
  { textColor: 'color' },
  { iconColor: 'color' },
)(BlockEdit)
