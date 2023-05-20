import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold text-teal-700 mt-8'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p className='text-xl mt-4 mb-8'>the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code.</p>
            <hr className='border border-teal-800 mb-8' />
            <h1 className='text-2xl font-bold text-teal-700'>Compare SQL and NoSQL databases?</h1>
            <p className='text-xl mt-4 mb-8'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            <hr className='border border-teal-800 mb-8' />
            <h1 className='text-2xl font-bold text-teal-700'>What is express js? What is Nest JS?</h1>
            <p className='text-xl mt-4 mb-8'>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
            <hr className='border border-teal-800 mb-8' />
            <h1 className='text-2xl font-bold text-teal-700'>What is MongoDB aggregate and how does it work?</h1>
            <p className='text-xl mt-4 mb-8'> aggregation operations is Group values from multiple documents together. Perform operations on the grouped data to return a single result. Analyze data changes over time.ata aggregation is often used to provide statistical analysis for groups of people and to create useful summary data for business analysis. Aggregation is often done on a large scale, through software tools known as data aggregators.</p>
            <hr className='border border-teal-800 mb-8' />
        </div>
    );
};

export default Blogs;