import React, { useEffect, useState } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated()

const SelectComp = ({ Controller, control, watch }) => {

    const [selectedOption, setselectedOption] = useState(null)

    const options1 = [
        { value: 'tehran', label: 'تهران' },
        { value: 'alborz', label: 'البرز' },
        { value: 'mazandaran', label: 'مازندران' },
    ];

    const options2 = {

        mazandaran: [
            { value: 'babol', label: 'بابل' },
            { value: 'sari', label: 'ساری' },
            { value: 'amol', label: 'امل' },
        ], alborz: [
            { value: 'karaj', label: 'کرج' },
            { value: 'meshkindasht', label: 'مشکین دشت' },
            { value: 'hashtgerd', label: 'هشتگرد' },
        ], tehran: [
            { value: 'tehran', label: 'تهران' },
            { value: 'damavand', label: 'دماوند' },
            { value: 'rey', label: 'ری' },
        ],

    }


    useEffect(() => {

        setselectedOption(watch('selectfood'))

    }, [watch('selectfood')
    ]);

    return (

        <>

            <Controller
                control={control}
                name='selectfood'
                render={({ field }) => (
                    <Select
                        {...field}
                        components={animatedComponents}
                        options={options1}
                    />
                )}
            />

            <Controller
                control={control}
                name='selectcity'
                render={({ field }) => (
                    <Select
                        {...field}
                        components={animatedComponents}
                        options={selectedOption && options2[selectedOption.value]}
                        isDisabled={!selectedOption}
                    />
                )}
            />

        </>
    )
}

export default SelectComp