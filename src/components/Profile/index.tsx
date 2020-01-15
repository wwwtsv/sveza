import './index.sass';
import React, { CSSProperties, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import Select, { components } from 'react-select';

const address = [
    {
        label: 'СВЕЗА Усть-Ижора',
        value: 'СВЕЗА Усть-Ижора',
        about: 'Колпинский район, посёлок Понтонный, ул.Фанерная, дом 5, 3 этаж',
    },
    {
        label: 'СВЕЗА Кострома',
        value: 'СВЕЗА Кострома',
        about: 'Город Кострома, улица Комсомольская, дом 2, 1 этаж',
    },
    {
        label: 'СВЕЗА Уральский',
        value: 'СВЕЗА Уральский',
        about: 'Пермский край, Нытвенский р-н, пос. Уральский, ул . Московская, дом 1а',
    },
    {
        label: 'СВЕЗА Мантурово',
        value: 'СВЕЗА Мантурово',
        about: 'Город Мантурово, ул.Матросова, дом 2Б, 2 этаж',
    },
    {
        label: 'СВЕЗА Новатор',
        value: 'СВЕЗА Новатор',
        about: 'Вологодская обл., Великоустюгский район, поселок Новатор',
    },
    {
        label: 'СВЕЗА Верхняя Синячиха',
        value: 'СВЕЗА Верхняя Синячиха',
        about: 'Алапаевский район, посёлок Верхняя Синячиха, ул.Кедровая, дом 1',
    },
    {
        label: 'СВЕЗА Тюмень',
        value: 'СВЕЗА Тюмень',
        about: 'Город Тюмень, ул.Камчатская, 196',
    },
    {
        label: 'СВЕЗА Ресурс',
        value: 'СВЕЗА Ресурс',
        about: 'Тотемский район, посёлок Советский, ул. Дачная 1А',
    },
];
const customComponentStyles = {
    menuHeaderStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 45,
        padding: '13px 13px 0 28px',
        marginBottom: '12px',
        color: '#525252',
        font: 'bold 13px Gotham, sans-serif',
    },
    separator: {
        position: 'absolute',
        top: 50,
        width: 286,
        height: 1.5,
        background: '#D6D6D6',
    } as CSSProperties,
    customAbout: {
        paddingTop: '8px',
        lineHeight: 1.5,
        opacity: 0.5,
    },
};
const customStyles = {
    control: (provided: any, state: any) => ({
        ...provided,
        width: 342,
        height: 45,
        border: '1.5px solid #D6D6D6',
        borderRadius: 0,
        fontFamily: 'Gotham, sans-serif',
        fontSize: '13px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: 'unset',
        ':hover': {
            borderColor: '#D6D6D6',
        },
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '13px 13px 0 28px',
        height: 86,
        cursor: 'pointer',
        color: '#525252',
        font: 'bold 13px Gotham, sans-serif',
        background: state.isSelected ? '#FBFBFB' : '#FBFBFB',
        userSelect: 'select',
        ':hover': {
            background: '#81B33B',
            color: '#fff',
        },
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    indicatorsContainer: () => ({
        svg: {
            fill: '#525252',
            ':hover': {
                fill: '#525252',
            },
        },
    }),
    menu: (provided: any, state: any) => ({
        ...provided,
        marginTop: 18,
        background: '#FBFBFB',
        borderRadius: 0,
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        '&:before': {
            content: '""',
            display: 'block',
            width: 0,
            height: 0,
            position: 'absolute',
            top: -12,
            left: 12,
            borderStyle: 'solid',
            borderWidth: '0 12px 12px 12px',
            borderColor: 'transparent transparent #FBFBFB transparent',
        },
    }),
};

export const Profile = () => {
    const [dateBirth, setDateBirth] = useState(null);
    const [startDateEnter, setDateEnter] = useState(null);
    const [startDateEnd, setDateEnd] = useState(null);
    const [startDateEnterSecond, setDateEnterSecond] = useState(null);
    const [startDateEndSecond, setDateEndSecond] = useState(null);
    const [startDateEnterThree, setDateEnterThree] = useState(null);
    const [startDateEndThree, setDateEndThree] = useState(null);
    const [startDateEnterFour, setDateEnterFour] = useState(null);
    const [startDateEndFour, setDateEndFour] = useState(null);

    const [currentValue, setCurrentValue] = useState('');

    const Option = ({ ...props }) => {
        return (
            <components.Option {...props}>
                {props.children}
                <div style={customComponentStyles.customAbout}>{props.data.about}</div>
            </components.Option>
        );
    };

    const MenuList = ({ ...props }) => {
        return (
            <components.MenuList {...props}>
                <div style={customComponentStyles.menuHeaderStyle}>
                    {currentValue || props.options[0].value}
                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.2806 0L5.24268 7.03301L1.98512 3.76382L0.613281 5.24773L5.34855 10L12.7545 1.37361L11.2806 0Z"
                            fill="#81B33B"
                        />
                    </svg>
                    <div style={customComponentStyles.separator} />
                </div>
                {props.children}
            </components.MenuList>
        );
    };

    return (
        <section className="Profile">
            <h2 className="Profile-Title">Анкета</h2>
            <form action="" className="Profile-Form">
                <div className="Profile-Main">
                    <div className="Profile-Grid">
                        <label className="Profile-Label">
                            Вакансия
                            <input type="text" className="Profile-Input" />
                        </label>
                        <label className="Profile-Label">
                            Желаемый уровень дохода
                            <input type="text" className="Profile-Input" />
                        </label>
                        <label className="Profile-Label">
                            ФИО*
                            <input type="text" className="Profile-Input" />
                        </label>
                        <label className="Profile-Label">
                            Адрес проживания
                            <input type="text" className="Profile-Input" />
                        </label>
                        <div className="Profile-Label">
                            Дата рождения
                            <DatePicker
                                dateFormat="dd-MM-yyyy"
                                fixedHeight={true}
                                selected={dateBirth}
                                onChange={(date: null) => setDateBirth(date)}
                                locale={ru}
                                showMonthDropdown
                                showYearDropdown
                                scrollableYearDropdown
                                className="Date"
                                dayClassName={date => 'Date-Day'}
                                calendarClassName="Date-Calendar"
                                placeholderText="__-__-____"
                                todayButton="Выбрать"
                                yearDropdownItemNumber={40}
                            />
                        </div>
                    </div>
                    <div className="Profile-Grid">
                        <label className="Select-Label">
                            <span>Комбинат*</span>
                            <Select
                                defaultValue={address[0]}
                                options={address}
                                styles={customStyles}
                                isSearchable={false}
                                components={{ MenuList, Option }}
                                onChange={({ ...newValue }) => setCurrentValue(newValue.value)}
                            />
                        </label>

                        <fieldset className="Profile-PhoneNumber">
                            <label className="Phone">
                                <span>Телефон*</span>
                                <input placeholder="+7" type="tel" className="Phone-CityCode" />
                                <input placeholder="___-____-____" type="tel" className="Phone-Number" />
                            </label>
                        </fieldset>
                        <label className="Profile-Label">
                            Адрес по прописке
                            <input type="text" className="Profile-Input" />
                        </label>
                    </div>
                    <div className="Profile-Grid">
                        <h2 className="Profile-Subtitle">Паспортные данные</h2>
                        <label className="Profile-Label">
                            Номер паспорта
                            <input type="text" className="Profile-Input" />
                        </label>
                        <label className="Profile-Label">
                            Кем выдан
                            <input type="text" className="Profile-Input" />
                        </label>
                    </div>
                    <div className="Profile-Grid Profile-Grid_gap_top">
                        <label className="Profile-Label">
                            Серия
                            <input type="text" className="Profile-Input" />
                        </label>
                        <label className="Profile-Label">
                            Когда выдан
                            <input type="text" className="Profile-Input" />
                        </label>
                    </div>
                    <div className="Profile-Grid Profile-Grid_width_full">
                        <fieldset className="Profile-FieldSet">
                            <legend className="Profile-Legend">Пол</legend>
                            <div className="Profile-Checkbox">
                                <div className="Checkbox">
                                    <input id="female" name="gender" type="radio" className="Checkbox-Input" />
                                    <label htmlFor="female" className="Checkbox-Label">
                                        Женский
                                    </label>
                                </div>
                                <div className="Checkbox">
                                    <input id="male" name="gender" type="radio" className="Checkbox-Input" />
                                    <label htmlFor="male" className="Checkbox-Label">
                                        Мужской
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="Profile-FieldSet">
                            <legend className="Profile-Legend">Семейное положение</legend>
                            <div className="Profile-Checkbox">
                                <div className="Checkbox">
                                    <input id="married" name="family" type="radio" className="Checkbox-Input" />
                                    <label htmlFor="married" className="Checkbox-Label">
                                        женат/замужем
                                    </label>
                                </div>
                                <div className="Checkbox">
                                    <input id="notMarried" name="family" type="radio" className="Checkbox-Input" />
                                    <label htmlFor="notMarried" className="Checkbox-Label">
                                        холост/не замужем
                                    </label>
                                </div>
                                <div className="Checkbox">
                                    <input id="divorce" name="family" type="radio" className="Checkbox-Input" />
                                    <label htmlFor="divorce" className="Checkbox-Label">
                                        разведен/разведена
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <label className="Profile-Label">
                            Дети (пол, возраст)
                            <input type="text" className="Profile-Input" />
                        </label>
                        <fieldset className="Profile-FieldSet">
                            <legend className="Profile-Legend">Основное образование</legend>
                            <div className="Profile-Checkbox">
                                <div className="Checkbox">
                                    <input id="higher" name="education" type="radio" className="Checkbox-Input" />
                                    <label htmlFor="higher" className="Checkbox-Label">
                                        высшее
                                    </label>
                                </div>
                                <div className="Checkbox">
                                    <input id="incomplete" name="education" type="radio" className="Checkbox-Input" />
                                    <label htmlFor="incomplete" className="Checkbox-Label">
                                        неоконченное высшее
                                    </label>
                                </div>
                                <div className="Checkbox">
                                    <input id="secondary" name="education" type="radio" className="Checkbox-Input" />
                                    <label htmlFor="secondary" className="Checkbox-Label">
                                        среднее профессиональное
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="Profile-Grid">
                        <div className="Profile-Label">
                            Год поступления
                            <DatePicker
                                dateFormat="dd-MM-yyyy"
                                fixedHeight={true}
                                selected={startDateEnter}
                                onChange={(date: null) => setDateEnter(date)}
                                locale={ru}
                                showMonthDropdown
                                showYearDropdown
                                scrollableYearDropdown
                                className="Date"
                                dayClassName={date => 'Date-Day'}
                                calendarClassName="Date-Calendar"
                                placeholderText="__-__-____"
                                todayButton="Выбрать"
                                yearDropdownItemNumber={40}
                            />
                        </div>
                        <label className="Profile-Label">
                            Наименование учебного заведения
                            <input type="text" className="Profile-Input" />
                        </label>
                        <label className="Profile-Label">
                            форма учебного заведения
                            <input type="text" className="Profile-Input" />
                        </label>
                    </div>
                    <div className="Profile-Grid">
                        <div className="Profile-Label">
                            Год окончания
                            <DatePicker
                                dateFormat="dd-MM-yyyy"
                                fixedHeight={true}
                                selected={startDateEnd}
                                onChange={(date: null) => setDateEnd(date)}
                                locale={ru}
                                showMonthDropdown
                                showYearDropdown
                                scrollableYearDropdown
                                className="Date"
                                dayClassName={date => 'Date-Day'}
                                calendarClassName="Date-Calendar"
                                placeholderText="__-__-____"
                                todayButton="Выбрать"
                                yearDropdownItemNumber={40}
                            />
                        </div>
                        <label className="Profile-Label">
                            Специальность, квалификация
                            <input type="text" className="Profile-Input" />
                        </label>
                    </div>
                    <div className="Profile-Grid Profile-Grid_width_full">
                        <h2 className="Profile-Subtitle">
                            опыт работы (за последние 5-7 лет), начиная с последнего места работы, в том числе и без
                            оформления по трудовой книжке:
                        </h2>
                    </div>
                    <div className="Profile-Grid">
                        <h2 className="Profile-Subtitle">1 работа</h2>
                        <div className="Profile-Label">
                            Дата поступления
                            <DatePicker
                                dateFormat="dd-MM-yyyy"
                                fixedHeight={true}
                                selected={startDateEnterSecond}
                                onChange={(date: null) => setDateEnterSecond(date)}
                                locale={ru}
                                showMonthDropdown
                                showYearDropdown
                                scrollableYearDropdown
                                className="Date"
                                dayClassName={date => 'Date-Day'}
                                calendarClassName="Date-Calendar"
                                placeholderText="__-__-____"
                                todayButton="Выбрать"
                                yearDropdownItemNumber={40}
                            />
                        </div>
                        <label className="Profile-Label">
                            Наименование организации
                            <input type="text" className="Profile-Input" />
                        </label>
                        <label className="Profile-Label">
                            Причина ухода
                            <input type="text" className="Profile-Input" />
                        </label>
                    </div>
                    <div className="Profile-Grid Profile-Grid_gap_top">
                        <div className="Profile-Label">
                            Дата окончания
                            <DatePicker
                                dateFormat="dd-MM-yyyy"
                                fixedHeight={true}
                                selected={startDateEndSecond}
                                onChange={(date: null) => setDateEndSecond(date)}
                                locale={ru}
                                showMonthDropdown
                                showYearDropdown
                                scrollableYearDropdown
                                className="Date"
                                dayClassName={date => 'Date-Day'}
                                calendarClassName="Date-Calendar"
                                placeholderText="__-__-____"
                                todayButton="Выбрать"
                                yearDropdownItemNumber={40}
                            />
                        </div>
                        <label className="Profile-Label">
                            Должность
                            <input type="text" className="Profile-Input" />
                        </label>
                    </div>
                    <div className="Profile-Grid">
                        <h2 className="Profile-Subtitle">2 работа</h2>
                        <div className="Profile-Label">
                            Дата поступления
                            <DatePicker
                                dateFormat="dd-MM-yyyy"
                                fixedHeight={true}
                                selected={startDateEnterThree}
                                onChange={(date: null) => setDateEnterThree(date)}
                                locale={ru}
                                showMonthDropdown
                                showYearDropdown
                                scrollableYearDropdown
                                className="Date"
                                dayClassName={date => 'Date-Day'}
                                calendarClassName="Date-Calendar"
                                placeholderText="__-__-____"
                                todayButton="Выбрать"
                                yearDropdownItemNumber={40}
                            />
                        </div>

                        <label className="Profile-Label">
                            Наименование организации
                            <input type="text" className="Profile-Input" />
                        </label>
                        <label className="Profile-Label">
                            Причина ухода
                            <input type="text" className="Profile-Input" />
                        </label>
                    </div>
                    <div className="Profile-Grid Profile-Grid_gap_top">
                        <div className="Profile-Label">
                            Дата окончания
                            <DatePicker
                                dateFormat="dd-MM-yyyy"
                                fixedHeight={true}
                                selected={startDateEndThree}
                                onChange={(date: null) => setDateEndThree(date)}
                                locale={ru}
                                showMonthDropdown
                                showYearDropdown
                                scrollableYearDropdown
                                className="Date"
                                dayClassName={date => 'Date-Day'}
                                calendarClassName="Date-Calendar"
                                placeholderText="__-__-____"
                                todayButton="Выбрать"
                                yearDropdownItemNumber={40}
                            />
                        </div>
                        <label className="Profile-Label">
                            Должность
                            <input type="text" className="Profile-Input" />
                        </label>
                    </div>
                    <div className="Profile-Grid">
                        <h2 className="Profile-Subtitle">3 работа</h2>
                        <div className="Profile-Label">
                            Дата поступления
                            <DatePicker
                                dateFormat="dd-MM-yyyy"
                                fixedHeight={true}
                                selected={startDateEnterFour}
                                onChange={(date: null) => setDateEnterFour(date)}
                                locale={ru}
                                showMonthDropdown
                                showYearDropdown
                                scrollableYearDropdown
                                className="Date"
                                dayClassName={date => 'Date-Day'}
                                calendarClassName="Date-Calendar"
                                placeholderText="__-__-____"
                                todayButton="Выбрать"
                                yearDropdownItemNumber={40}
                            />
                        </div>
                        <label className="Profile-Label">
                            Наименование организации
                            <input type="text" className="Profile-Input" />
                        </label>
                        <label className="Profile-Label">
                            Причина ухода
                            <input type="text" className="Profile-Input" />
                        </label>
                    </div>
                    <div className="Profile-Grid Profile-Grid_gap_top">
                        <div className="Profile-Label">
                            Дата окончания
                            <DatePicker
                                dateFormat="dd-MM-yyyy"
                                fixedHeight={true}
                                selected={startDateEndFour}
                                onChange={(date: null) => setDateEndFour(date)}
                                locale={ru}
                                showMonthDropdown
                                showYearDropdown
                                scrollableYearDropdown
                                className="Date"
                                dayClassName={date => 'Date-Day'}
                                calendarClassName="Date-Calendar"
                                placeholderText="__-__-____"
                                todayButton="Выбрать"
                                yearDropdownItemNumber={40}
                            />
                        </div>
                        <label className="Profile-Label">
                            Должность
                            <input type="text" className="Profile-Input" />
                        </label>
                    </div>
                    <div className="Profile-Grid Profile-Grid_width_full">
                        <h2 className="Profile-Subtitle">Дополнительная информация:</h2>
                        <fieldset className="Profile-FieldSet">
                            <legend className="Profile-Legend">Водительское удостоверение:</legend>
                            <div className="Profile-Checkbox">
                                <div className="Checkbox">
                                    <input id="notDrive" name="driving" type="radio" className="Checkbox-Input" />
                                    <label htmlFor="notDrive" className="Checkbox-Label">
                                        нет
                                    </label>
                                </div>
                                <div className="Checkbox">
                                    <input id="yesDrive" name="driving" type="radio" className="Checkbox-Input" />
                                    <label htmlFor="yesDrive" className="Checkbox-Label">
                                        да
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="Profile-FieldSet">
                            <legend className="Profile-Legend">Категория:</legend>
                            <div className="Profile-Checkbox">
                                <div className="Checkbox">
                                    <input
                                        id="catA"
                                        name="category"
                                        value="A"
                                        type="checkbox"
                                        className="Checkbox-Input"
                                    />
                                    <label htmlFor="catA" className="Checkbox-Label">
                                        A
                                    </label>
                                </div>
                                <div className="Checkbox">
                                    <input
                                        id="catB"
                                        name="category"
                                        value="B"
                                        type="checkbox"
                                        className="Checkbox-Input"
                                    />
                                    <label htmlFor="catB" className="Checkbox-Label">
                                        B
                                    </label>
                                </div>
                                <div className="Checkbox">
                                    <input
                                        id="catC"
                                        name="category"
                                        value="C"
                                        type="checkbox"
                                        className="Checkbox-Input"
                                    />
                                    <label htmlFor="catC" className="Checkbox-Label">
                                        C
                                    </label>
                                </div>
                                <div className="Checkbox">
                                    <input
                                        id="catD"
                                        name="category"
                                        value="D"
                                        type="checkbox"
                                        className="Checkbox-Input"
                                    />
                                    <label htmlFor="catD" className="Checkbox-Label">
                                        D
                                    </label>
                                </div>
                                <div className="Checkbox">
                                    <input
                                        id="catE"
                                        name="category"
                                        value="E"
                                        type="checkbox"
                                        className="Checkbox-Input"
                                    />
                                    <label htmlFor="catE" className="Checkbox-Label">
                                        E
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="Profile-FieldSet">
                            <legend className="Profile-Legend">Работали ли у нас ранее?</legend>
                            <div className="Profile-Checkbox">
                                <div className="Checkbox">
                                    <input id="notPrevWork" name="prevWork" type="radio" className="Checkbox-Input" />
                                    <label htmlFor="notPrevWork" className="Checkbox-Label">
                                        нет
                                    </label>
                                </div>
                                <div className="Checkbox">
                                    <input id="yesPrevWork" name="prevWork" type="radio" className="Checkbox-Input" />
                                    <label htmlFor="yesPrevWork" className="Checkbox-Label">
                                        да
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <label className="Profile-Label Profile-Label_width_full">
                            Где, в какой должности и в какой период?
                            <input type="text" className="Profile-Input" />
                        </label>
                        <label className="Profile-Label Profile-Label_width_full">
                            Работают ли у Вас родственники, знакомые в нашей компании (родство, ФИО, должность)
                            <input type="text" className="Profile-Input" />
                        </label>
                        <fieldset className="Profile-FieldSet">
                            <legend className="Profile-Legend">
                                Имеете ли Вы какие-либо ограничения по состоянию здоровья?
                            </legend>
                            <div className="Profile-Checkbox">
                                <div className="Checkbox">
                                    <input id="notHealth" name="health" type="radio" className="Checkbox-Input" />
                                    <label htmlFor="notHealth" className="Checkbox-Label">
                                        нет
                                    </label>
                                </div>
                                <div className="Checkbox">
                                    <input id="yesHealth" name="health" type="radio" className="Checkbox-Input" />
                                    <label htmlFor="yesHealth" className="Checkbox-Label">
                                        да
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <label className="Profile-Label Profile-Label_width_full">
                            Какие?
                            <input type="text" className="Profile-Input" />
                        </label>
                        <label className="Profile-Label">
                            Источник вакансии?
                            <input type="text" className="Profile-Input" />
                        </label>
                        <div className="Checkbox Checkbox_type_alt">
                            <input id="yesPersonal" name="personal" type="checkbox" className="Checkbox-Input" />
                            <label htmlFor="yesPersonal" className="Checkbox-Label">
                                Согласие на обработку персональных данных →
                            </label>
                        </div>
                    </div>
                    <button className="Profile-Submit">Отправить</button>
                </div>
            </form>
        </section>
    );
};
