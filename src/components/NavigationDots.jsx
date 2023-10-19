/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const NavigationDots = ({ active }) => (
    <div className="app__navigation">
        {['acceuil', 'à propos', 'projets', 'compétences', 'contact'].map((item, index) => (
            <a
                href={`#${item}`}
                key={item + index}
                className="app__navigation-dot"
                style={active === item ? { backgroundColor: '#95C082' } : {}}
            />
        ))}
    </div>
);

export default NavigationDots;