import React, { useEffect, useState, useMemo } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Row, Input, Col, Container, Label, FormGroup, Button, ButtonGroup, InputGroup, FormFeedback } from "reactstrap";
import logo from '../../assets/image/cartoon-businessman-holding-briefcase-vector_1023984-34228.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import JoditEditor from 'jodit-react';
import fa from './fa'; // فایل زبان فارسی
import { useTheme } from '../../context/themecontext'


const animatedComponents = makeAnimated()



const Form = ({ Controller, control, watch, placeholder, setValue, clearErrors, errors }) => {

    const { isDark } = useTheme();


    const [Selected, setSelected] = useState(null);

    const selectedType = watch('idType');

    const handleTypeChange = (type) => {
        setValue('idType', type);
        setValue('idNumber', ''); // پاک کردن مقدار هنگام تغییر نوع
    };

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

        setselectedOption(watch('Province'))

    }, [watch('Province')
    ]);

    const [content, setContent] = useState('');
    const [addedContent, setaddedContent] = useState('');


    const firstconfig = useMemo(() => ({
        language: 'fa',
        i18n: {
            fa
        },
        readonly: false,
        theme: isDark ? 'dark' : 'light',
        placeholder: 'رزومه خود را وارد کنید',
        style: {
            fontFamily: 'gandom',
        },
    }), [placeholder, isDark]);

    const full_time_jobValue = watch('full_time_job');
    const part_time_jobValue = watch('part_time_job');

    useEffect(() => {
        if (full_time_jobValue || part_time_jobValue) {
            clearErrors('checkboxes');
        }
    }, [full_time_jobValue, part_time_jobValue, clearErrors]);

    return (

        <Container className={isDark && "bg-dark text-white"} data-bs-theme={isDark && "dark"} dir="rtl">

            <Row className="pt-3 align-items-center justify-content-center">

                <Col lg={9}>

                    <Row>

                        <Col md={6} xs={12}>

                            <FormGroup>
                                <Label for="first__name">
                                    نام
                                </Label>
                                <Controller
                                    control={control}
                                    name='first__name'
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            id="first__name"
                                            placeholder="لطفا نام خود را وارد کنید"
                                            type="text"
                                            invalid={errors.first__name}
                                        />
                                    )}
                                />
                                <FormFeedback>{errors.first__name?.message}</FormFeedback>
                            </FormGroup>

                        </Col>

                        <Col md={6} xs={12}>

                            <FormGroup>
                                <Label for="last__name">
                                    نام خانوادگی
                                </Label>
                                <Controller
                                    control={control}
                                    name="last__name"
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            id="last__name"
                                            placeholder="لطفا نام خانوادگی خود را وارد کنید"
                                            type="text"
                                            invalid={errors.last__name}
                                        />
                                    )}
                                />
                                <FormFeedback>{errors.last__name?.message}</FormFeedback>
                            </FormGroup>

                        </Col>

                        <Col className="mb-3" md={6} xs={12}>
                            <Label>استان</Label>
                            <br />
                            <Controller
                                control={control}
                                name='Province'
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        components={animatedComponents}
                                        placeholder='لطفا استان را انتخاب کنید'
                                        options={options1}
                                        theme={(theme) => ({
                                            ...theme,
                                            colors: {
                                                ...theme.colors,
                                                neutral0: isDark ? '#2d2d2d' : theme.colors.neutral0, // پس‌زمینه اصلی
                                                neutral80: isDark ? '#fff' : theme.colors.neutral80, // رنگ متن اصلی
                                                neutral50: isDark ? '#ccc' : theme.colors.neutral50, // رنگ placeholder
                                                primary25: isDark ? '#404040' : theme.colors.primary25, // رنگ هایلایت هاور
                                                neutral30: isDark ? '#666' : '#fff', // رنگ border
                                            }
                                        })}
                                        styles={{
                                            control: (base) => ({
                                                ...base,
                                                backgroundColor: isDark ? '#2d2d2d' : base.backgroundColor,
                                            }),
                                            menu: (base) => ({
                                                ...base,
                                                backgroundColor: isDark ? '#2d2d2d' : base.backgroundColor,
                                            }),
                                            singleValue: (base) => ({
                                                ...base,
                                                color: isDark ? '#fff' : base.color,
                                            }),
                                            input: (base) => ({
                                                ...base,
                                                color: isDark ? '#fff' : base.color,
                                            }),
                                            option: (base) => ({
                                                ...base,
                                                color: isDark ? '#fff' : base.color,
                                                backgroundColor: isDark ? '#2d2d2d' : base.backgroundColor,
                                                '&:hover': {
                                                    backgroundColor: isDark
                                                        && '#404040'
                                                }
                                            }),
                                            menuList: (base) => ({
                                                ...base,
                                                color: isDark ? '#fff' : base.color, // رنگ متن لیست منو
                                            }),
                                        }}
                                    />
                                )}
                            />
                            <h6 className="text-danger mt-1">{errors.Province?.message}</h6>
                        </Col>


                        <Col className="mb-3" md={6} xs={12}>

                            <Label>شهرستان</Label>
                            <br />
                            <Controller
                                control={control}
                                name='city'
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        components={animatedComponents}
                                        placeholder={selectedOption ? 'لطفا شهر را انتخاب کنید' : "ابتدا استان را انتخاب کنید"}
                                        options={selectedOption && options2[selectedOption.value]}
                                        isDisabled={!selectedOption}
                                        theme={(theme) => ({
                                            ...theme,
                                            colors: {
                                                ...theme.colors,
                                                neutral0: isDark ? '#2d2d2d' : theme.colors.neutral0, // پس‌زمینه اصلی
                                                neutral80: isDark ? '#fff' : theme.colors.neutral80, // رنگ متن اصلی
                                                neutral50: isDark ? '#ccc' : theme.colors.neutral50, // رنگ placeholder
                                                primary25: isDark ? '#404040' : theme.colors.primary25, // رنگ هایلایت هاور
                                                neutral30: isDark ? '#666' : '#fff', // رنگ border
                                            }
                                        })}
                                        styles={{
                                            control: (base) => ({
                                                ...base,
                                                backgroundColor: isDark ? '#2d2d2d' : base.backgroundColor,
                                            }),
                                            menu: (base) => ({
                                                ...base,
                                                backgroundColor: isDark ? '#2d2d2d' : base.backgroundColor,
                                            }),
                                            singleValue: (base) => ({
                                                ...base,
                                                color: isDark ? '#fff' : base.color,
                                            }),
                                            input: (base) => ({
                                                ...base,
                                                color: isDark ? '#fff' : base.color,
                                            }),
                                            option: (base) => ({
                                                ...base,
                                                color: isDark ? '#fff' : base.color, // رنگ متن آیتم‌های منو
                                                backgroundColor: isDark ? '#2d2d2d' : base.backgroundColor,
                                                '&:hover': {
                                                    backgroundColor: isDark && '#404040'
                                                }
                                            }),
                                            menuList: (base) => ({
                                                ...base,
                                                color: isDark ? '#fff' : base.color, // رنگ متن لیست منو
                                            }),
                                        }}
                                    />
                                )}
                            />
                            <h6 className="text-danger mt-1">{errors.city?.message}</h6>

                        </Col>

                        <Col md={6} xs={12}>

                            <FormGroup>

                                <Label>کد پستی</Label>

                                <Controller
                                    control={control}
                                    name="postal_code"
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            placeholder="کد پستی خود را وارد کنید"
                                            type='number'
                                            invalid={errors.postal_code}
                                        />
                                    )}
                                />
                                <FormFeedback>{errors.postal_code?.message}</FormFeedback>
                            </FormGroup>

                        </Col>

                        <Col md={6} xs={12}>

                            <FormGroup>

                                <Label>کد ملی یا شناسه اقتصادی</Label>

                                <InputGroup dir="ltr">

                                    <Controller
                                        control={control}
                                        name='idNumber'
                                        render={({ field }) => (

                                            <Input
                                                {...field}
                                                placeholder={
                                                    selectedType === 'national'
                                                        ? 'کد ملی (۱۰ رقم)'
                                                        : 'شناسه اقتصادی (۱۲ رقم)'
                                                }
                                                type="number"
                                                dir="rtl"
                                                invalid={!!errors.idNumber}
                                            />
                                        )}
                                    />


                                    <ButtonGroup>
                                        <Button
                                            color="primary"
                                            outline
                                            onClick={() => handleTypeChange('national')}
                                            active={selectedType === 'national'}
                                            className="rounded-0"
                                        >
                                            حقیقی
                                        </Button>
                                        <Button
                                            color="primary"
                                            outline
                                            onClick={() => handleTypeChange('economic')}
                                            active={selectedType === 'economic'}
                                        >
                                            حقوقی
                                        </Button>
                                    </ButtonGroup>


                                </InputGroup>
                                {errors.idNumber && (
                                    <h6 className="mt-1 text-danger">{errors.idNumber.message}</h6>
                                )}

                            </FormGroup>


                        </Col>


                        <Col className="mb-3" md={6} xs={12}>

                            <Label>نوع همکاری:</Label>
                            <br />

                            <FormGroup
                                check
                                inline
                            >
                                <Label check>
                                    تمام وقت
                                </Label>

                                <Controller
                                    control={control}
                                    name='full_time_job'
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            type="checkbox"
                                            checked={!!field.value}
                                            onChange={(e) => field.onChange(e.target.checked)}
                                            innerRef={field.ref}
                                        />
                                    )}
                                />

                            </FormGroup>
                            <FormGroup
                                check
                                inline
                            >
                                <Controller
                                    control={control}
                                    name='part_time_job'
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            type="checkbox"
                                            checked={!!field.value}
                                            onChange={(e) => field.onChange(e.target.checked)}
                                            innerRef={field.ref}
                                        />
                                    )}
                                />
                                <Label check>
                                    پاره وقت
                                </Label>
                            </FormGroup>


                            {errors.checkboxes && (
                                <p className="mt-1 text-danger">{errors.checkboxes.message}</p>
                            )}

                        </Col>

                        <Col md={6} xs={12}>

                            <FormGroup>

                                <Label>تاریخ تولد</Label>
                                <br />
                                <Controller
                                    control={control}
                                    name="date"
                                    render={({ field }) => (
                                        <DatePicker
                                            {...field}
                                            calendar={persian}
                                            locale={persian_fa}
                                            calendarPosition="bottom-right"
                                            placeholder="تاریخ تولد خود را وارد کنید"
                                            inputClass={`form-control ${errors.date ? "is-invalid" : ""}`}
                                            onChange={(date) => field.onChange(date)}
                                        />
                                    )}
                                />

                                <FormFeedback>{errors.date?.message}</FormFeedback>

                            </FormGroup>

                        </Col>

                        <Col xs={12}>


                            <FormGroup>

                                <Label>رزومه کامل</Label>
                                <br />

                                <Controller
                                    control={control}
                                    name="resume"
                                    render={({ field }) => (
                                        <JoditEditor
                                            {...field}
                                            config={firstconfig}
                                            value={field.value}
                                            tabIndex={1}
                                            onChange={newContent => field.onChange(newContent)}
                                        />
                                    )}
                                />
                                <h6 className="mt-1 text-danger">{errors.resume?.message}</h6>


                            </FormGroup>

                        </Col>

                        <Col>

                            <Button color="primary" type="submit">
                                ثبت اطلاعات وارد شده
                            </Button>

                        </Col>

                    </Row>

                </Col>

                <Col lg={3} sm={4} xs={6} >

                    <img src={logo} />

                </Col>

            </Row>

        </Container>

    )
}


export default Form
