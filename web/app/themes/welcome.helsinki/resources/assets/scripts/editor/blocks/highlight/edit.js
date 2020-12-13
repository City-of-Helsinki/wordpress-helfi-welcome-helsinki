import classnames from 'classnames'
import PropTypes from 'prop-types'
import { __ } from '@wordpress/i18n'
import {
  InspectorControls,
  RichText,
  withColors,
  __experimentalPanelColorGradientSettings as PanelColorGradientSettings,
  URLInput,
} from '@wordpress/block-editor'
import {
  PanelBody,
  PanelRow,
  RadioControl,
} from '@wordpress/components'

import icons from '../../../icons'

const DOMAIN = 'hds'
const CLASS_NAME = `wp-block-${DOMAIN}-highlight`

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
  const { iconName, heading, body, linkText, linkUrl } = attributes

  return (
    <div
      className={classnames(
        CLASS_NAME,
        backgroundColor.class,
        !!backgroundColor.class && 'has-background-color'
      )}
    >
      <div className={`${CLASS_NAME}__columns`}>
        <div className={`${CLASS_NAME}__column icon-column`}>
          <div
            className={classnames(
              `${CLASS_NAME}__icon`,
              'hds-icon',
              `hds-icon--${iconName}`,
              iconColor.class,
            )}
          />
        </div>
        <div className={`${CLASS_NAME}__column body-column`}>
          <RichText
            placeholder={__('Enter heading', DOMAIN)}
            tagName="h2"
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
        </div>
        <div className={`${CLASS_NAME}__column button-column`}>
          <URLInput
            placeholder={__('Enter link url', DOMAIN)}
            tagName="div"
            className={`${CLASS_NAME}__link-url-input ${textColor.class}`}
            value={linkUrl}
            type="string"
            onChange={linkUrl => setAttributes({linkUrl})}
          />
          <div class={`wp-block-button is-style-outline ${CLASS_NAME}__button`}>
            <RichText
              placeholder={__('Enter button text', DOMAIN)}
              tagName="div"
              className={`${textColor.class} wp-block-button__link`}
              value={linkText}
              onChange={linkText => setAttributes({linkText})}
            />
          </div>
        </div>
      </div>
      <InspectorControls>
        <PanelColorGradientSettings
          title={ __( 'Color settings' ) }
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
                  <div
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
BlockEdit.displayName = 'HighlightBlockEdit'
BlockEdit.propTypes = {
  attributes: PropTypes.shape({
    iconName: PropTypes.string,
    heading: PropTypes.string,
    body: PropTypes.string,
    linkText: PropTypes.string,
    linkUrl: PropTypes.string,
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
