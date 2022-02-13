export const selectRecoveredStyles = {
    control: base => ({
            ...base,
            width : '250px',
            backgroundColor: '#10EF7C',
            color: '#010414',
            textAlign: 'center',
            border: 0,
            boxShadow: 'none',
            "&:hover": {
                backgroundColor : '#25b82d'
            }
        }
    ),
    singleValue : base => ({
        ...base,
        color: '#010414'
    }),
    dropdownIndicator: base => ({
        ...base,
        color: '#010414',
    }),
    placeholder: base => ({
        ...base,
        textAlign : 'center',
        color: '#010414'
    }),
};

export const selectConfirmedStyles = {
    control: base => ({
            ...base,
            maxWidth : '250px',
            backgroundColor: '#1013EF',
            color: '#FFFFFF',
            textAlign: 'center',
            border: 0,
            boxShadow: 'none',
            "&:hover": {
                backgroundColor : '#301ea6'
            }
        }
    ),
    dropdownIndicator: base => ({
        ...base,
        color: '#FFFFFF',
    }),
    placeholder: base => ({
        ...base,
        textAlign : 'center',
        color: '#FFFFFF'
    }),
    singleValue : base => ({
        ...base,
        color : '#FFFFFF'
    })
};

export const selectDeathStyles = {
    control: base => ({
            ...base,
            maxWidth : '250px',
            backgroundColor: '#FA1B1B',
            color: '#FFFFFF',
            textAlign: 'center',
            border: 0,
            boxShadow: 'none',
            "&:hover": {
                backgroundColor : '#a62626'
            }
        }
    ),
    singleValue : base => ({
        ...base,
        color: '#FFFFFF',
    }),
    dropdownIndicator: base => ({
        ...base,
        color: '#FFFFFF',
    }),
    placeholder: base => ({
        ...base,
        textAlign : 'center',
        color: '#FFFFFF'
    }),
};

export const selectLanguageStyles = {
    control: base => ({
            ...base,
            display : 'flex',
            backgroundColor: '#1013EF',
            color: '#FFFFFF',
            textAlign: 'center',
            border: 0,
            boxShadow: 'none',
        }
    ),
    menu: (base) => ({
        ...base,
    }),
    singleValue : base => ({
        ...base,
        color: '#FFFFFF',
    }),
    dropdownIndicator: base => ({
        ...base,
        color: '#FFFFFF',
    }),
    placeholder: base => ({
        ...base,
        textAlign : 'center',
        color: '#FFFFFF'
    }),
};







