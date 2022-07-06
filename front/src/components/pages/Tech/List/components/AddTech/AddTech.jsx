import React from "react";
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

const AddTech = ({addTech, setAddTech}) => {

    let handleChange;

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

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Название</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Деталь"
                      size="small"
                      multiline
                      maxRows={4}
                      // value={value}
                      // onChange={handleChange}
                    />
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Название"
                      size="small"
                      multiline
                      maxRows={4}
                      // value={value}
                      // onChange={handleChange}
                    />

                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Подписи</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Заготовка</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Modal>

    )
}

export default AddTech