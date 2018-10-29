import React from "react";
import PropTypes from "prop-types";
import { ContactPageTemplate } from "../../templates/contact-page";

const ContactPagePreview = ({ entry, getAsset }) => {
  return (
    <ContactPageTemplate
      title={entry.getIn(["data", "title"])}
      heading={entry.getIn(["data", "heading"])}
    />
  );
};

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ContactPagePreview;
