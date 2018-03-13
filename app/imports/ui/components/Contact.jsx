import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Contact from 'imports/ui/components/Contact/';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Contact extends React.Component {
  render() {
    return (
        <Card>
          <Card.Content>
            {this.prop.contacts.image}
            <Card.Header>
              {this.prop.contacts.firstName} {this.prop.contact.lastName}
            </Card.Header>
            <Card.Meta>
              {this.prop.contacts.address}
            </Card.Meta>
            <Card.Description>
              {this.prop.contacts.description}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Contact.propTypes = {
  stuff: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Contact);
