import React, {useState} from "react";
import Modal from "../../../../../Modal/Modal";
import Button from "@mui/material/Button";
import {Add} from "@mui/icons-material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Accordion from "@mui/material/Accordion";
import TextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles';

const AddTech = ({addTech, setAddTech}) => {

  const [expanded, setExpanded] = useState(true);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  };


    return (
        <Modal
            active={addTech}
            setActive={setAddTech}
            header={
                <Typography variant="h6" gutterBottom component="div" color="primary">
                    Добавление технологии
                </Typography>}
            footer=
                {
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button color="success"><Add />Создать</Button>
                    <Button color="secondary"><ContentCopyIcon />Копировать</Button>
                    <Button color="error"><DeleteOutlineIcon />Удалить</Button>
                    <Button color="primary"><ArchiveOutlinedIcon />В архив</Button>
                </ButtonGroup>
                }
            >

            <Accordion
                expanded={expanded}
                onChange={handleChange('panel1')}
                >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    Основные характеристики
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{display: "grid", gridTemplateColumns: "auto auto", gap: "10px"}}>
                        <TextField
                          label="Деталь"
                          size="small"
                          multiline
                          // value={value}
                          // onChange={handleChange}
                        />
                        <TextField
                          label="Название"
                          size="small"
                          multiline
                          // value={value}
                          // onChange={handleChange}
                        />
                        <TextField
                          label="Обозначение технологии"
                          size="small"
                          multiline
                          // value={value}
                          // onChange={handleChange}
                        />
                        <TextField
                          label="Индекс"
                          size="small"
                          multiline
                          // value={value}
                          // onChange={handleChange}
                        />
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    Атрибуты документа
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{display: "grid", gridTemplateColumns: "80% auto",  gap: "10px"}}>
                        <TextField
                          label="Название комлекта"
                          size="small"
                          multiline
                          // value={value}
                          // onChange={handleChange}
                        />
                        <TextField
                          label="Литера"
                          size="small"
                          multiline
                          // value={value}
                          // onChange={handleChange}
                        />
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    Заготовка
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                      label="Сортамент"
                      size="small"
                      multiline
                      style={{width: "100%", margin: "0 0 10px 0"}}
                      // value={value}
                      // onChange={handleChange}
                    />
                    <div style={{display: "grid", gridTemplateColumns: "auto auto", gap: "10px"}}>
                        <TextField
                          label="Код"
                          size="small"
                          multiline
                          // value={value}
                          // onChange={handleChange}
                        />
                        <TextField
                          label="ЕВ"
                          size="small"
                          multiline
                          // value={value}
                          // onChange={handleChange}
                        />
                                                <TextField
                          label="МД"
                          size="small"
                          multiline
                          // value={value}
                          // onChange={handleChange}
                        />
                        <TextField
                          label="ЕН"
                          size="small"
                          multiline
                          // value={value}
                          // onChange={handleChange}
                        />
                    </div>
                </AccordionDetails>
            </Accordion>

        </Modal>

    )
}

export default AddTech