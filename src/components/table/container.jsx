import React, { useState, useMemo } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import JoditEditor from 'jodit-react';
import fa from './fa';
import DataTable from './index'
import { useSelector } from "react-redux";

const container = () => {
    const data = useSelector((state) => state.data);

    const [selectedItem, setSelectedItem] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const handleView = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
    };

    const handleExportExcel = () => {
        const transformedData = data.map(item => ({
            ...item,
            city: item.city?.label || null,// اگر city وجود داشت label آن را بگیر، در غیر این صورت null بگذار
            Province: item.Province?.label || null // اگر city وجود داشت label آن را بگیر، در غیر این صورت null بگذار
        }))
        const worksheet = XLSX.utils.json_to_sheet(transformedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
        saveAs(blob, "data.xlsx");
    };

    const secondconfig = useMemo(() => ({
        language: 'fa',
        i18n: {
            fa
        },
        style: {
            fontFamily: 'gandom',
        },
        readonly: true,
        placeholder: 'متن نمایشی...',
        buttons: false,
    }), []);

    return (
        <div dir="rtl">

            <DataTable data={data} onDelete={handleDelete} onView={handleView} />

            <Button color="success" onClick={handleExportExcel}>
                دریافت فایل اکسل
            </Button>

            <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)}>
                <ModalHeader toggle={() => setModalOpen(false)}>جزئیات</ModalHeader>
                <ModalBody dir="rtl">
                    {selectedItem && (
                        <div>
                            <p>نام: {selectedItem.first__name}</p>
                            <p>نام خانوادگی: {selectedItem.last__name}</p>
                            <p>تاریخ تولد: {selectedItem.date}</p>
                            <p>استان: {selectedItem.Province?.label}</p>
                            <p>شهر: {selectedItem.city?.label}</p>
                            <p>کد پستی: {selectedItem.postal_code}</p>
                            <p>شغل تمام وقت: {selectedItem.full_time_job ? "بله" : "خیر"}</p>
                            <p>شغل پاره وقت: {selectedItem.part_time_job ? "بله" : "خیر"}</p>
                            <div><p>رزومه: </p>
                                <JoditEditor
                                    config={secondconfig}
                                    value={selectedItem.resume}
                                />
                            </div>
                        </div>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => setModalOpen(false)}>
                        بستن
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default container;