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
  Button,
} from '@wordpress/components'

const DOMAIN = 'hds'
const CLASS_NAME = `wp-block-${DOMAIN}-link-list`

function BlockEdit({
  attributes,
  setAttributes,
  textColor,
  setTextColor,
  backgroundColor,
  setBackgroundColor,
}) {
  const { heading, links: linksStr } = attributes

  let links
  try {
    links = JSON.parse(linksStr || '[]')
  } catch (err) {
    console.error(err)
    links = []
  }

  return (
    <div
      className={classnames(
        CLASS_NAME,
        backgroundColor.class,
        !!backgroundColor.class && 'has-background-color',
        textColor.class,
        !!textColor && 'has-text-color',
      )}
    >
      <h2 className={`${CLASS_NAME}__heading`}>
        <input
          type="text"
          className={`${CLASS_NAME}__heading-input `}
          placeholder={__('Enter heading', DOMAIN)}
          value={heading}
          onChange={({target: {value: heading}}) => setAttributes({heading})}
        />
      </h2>
      {links.map((link, index) => (
        <>
          <a
            class={classnames([
              `${CLASS_NAME}__link`,
              textColor.class,
              textColor.class && 'has-text-color'
            ])}
            key={index}
          >
            <div
              className={classnames([
                `${CLASS_NAME}__icon`,
                link.isExternal ? 'has-link-external-icon' : 'has-arrow-right-icon',
              ])}
              onClick={() => {
                link.isExternal = !link.isExternal
                setLinks(links)
              }}
            />
            <input
              type="text"
              autoFocus
              className={`${CLASS_NAME}__text-input`}
              placeholder={__('Enter text', DOMAIN)}
              value={link.text}
              onChange={({target: {value: text}}) => {
                link.text = text
                setLinks(links)
              }}
            />
            <Button
              className={`${CLASS_NAME}__remove-button`}
              isDestructive
              onClick={() => {
                links.splice(index, 1)
                setLinks(links)
              }}
            >Remove</Button>
          </a>
          <URLInput
            autoFocus={false}
            placeholder={__('Enter link', DOMAIN)}
            tagName="div"
            className={`${CLASS_NAME}__url-input`}
            value={link.url}
            type="string"
            onChange={url => {
              link.url = url
              setLinks(links)
            }}
          />
        </>
      ))}
      <div>
        <Button
          isPrimary
          onClick={() => {
            setLinks([...links, {
              external: false,
              text: '',
              href: '',
            }])
          }}
        >
          Add link
        </Button>
      </div>
      <InspectorControls>
        <PanelColorGradientSettings
          title={ __( 'Colors' ) }
          settings={[
            {
              colorValue: backgroundColor.color,
              onColorChange: setBackgroundColor,
              label: __('Background color'),
            },
            {
              colorValue: textColor.color,
              onColorChange: setTextColor,
              label: __('Text color'),
            },
          ]}
        >
        </PanelColorGradientSettings>
      </InspectorControls>
    </div>
  )

  function setLinks (links) {
    setAttributes({links: JSON.stringify(links)})
  }
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
