import React, { use } from 'react';

const Emails = ({EmailsPromise}) => {
    const emails =use(EmailsPromise)
    console.log(emails)
    return (
        <div>
            <h3>Emails.</h3>
        </div>
    );
};

export default Emails;