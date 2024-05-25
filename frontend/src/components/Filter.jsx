import React from 'react';

const Filter = ({ onFilter }) => {
    return (
        <div>
            <button onClick={() => onFilter('all')}>All Tasks</button>
            <button onClick={() => onFilter('completed')}>Completed</button>
            <button onClick={() => onFilter('ongoing')}>Ongoing</button>
        </div>
    );
};

export default Filter;
