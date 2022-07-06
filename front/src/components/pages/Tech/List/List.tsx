import React, {useEffect, useState} from "react";
import style from './List.module.scss'
import {
    Button,
    Divider,
    MenuItem,
    Pagination,
    Select,
    SelectChangeEvent,
    Skeleton,
} from '@mui/material';
import {Add} from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import DrawingStr from "./components/DrawingStr/DrawingStr";
import TechStr from "./components/TechStr/TechStr";
import { getData } from "../../../../functions";
import {ITech, IDetail} from '../interface'
import AddTech from "./components/AddTech/AddTech";


const List = () => {

    const [tech, setTech] = useState<ITech [] | null>(null)
    const [detail, setDetail] = useState<IDetail [] | null>(null)
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)
    const [listLen, setListLen] = useState(5)
    const [addTech, setAddTech] = useState(false)


    // const newTech = () => {
        // console.log('addTech', addTech)
        // setAddTech(true)
    // }


    const changePage = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value)
    }

    const changeListLen = (
        event: SelectChangeEvent<number>,
    ) => {
        setListLen(Number(event.target.value))
    }


    useEffect(() => {
        const post = {url: 'list_tech', filter: '', page: page, page_len: listLen}
        getData(post)
            .then(data => {
                const {tech, detail, page_count} = data
                setTech(tech)
                setDetail(detail)
                setPageCount(page_count)
            })
    },[page, listLen])

    return (
        <div className={style.list}>
            <div className={style.sub_menu}>
                <Button onClick={() => setAddTech(true)} title="Добавить технологию">
                    <Add style={{margin: '0'}} />
                </Button>
                <Divider orientation="vertical" flexItem />
                <Button title="Только мои технологии">Мои</Button>
                <Button title="Все технологии">Все</Button>
                <Button title="Фильтровать технологии">
                    <SearchIcon style={{margin: '0'}} />
                </Button>
            </div>

            <div className={style.head}>
                <b>Технологические процессы в базе</b>
                <div className={style.paginator}>
                    <Pagination count={pageCount} color="primary" onChange={changePage} />
                    <Select value={listLen} size="small" onChange={e => changeListLen(e)}>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                    </Select>
                </div>
            </div>

            <DrawingStr key={'DrawingStr'} drawing={'Чертеж'} />
            <TechStr
                key={'TechStr'}
                name={'Обозначение технологии'}
                version={'№ изм.'}
                title={'Описание'}
                status={<FlagOutlinedIcon />}
                clickable={false} />
            {
                detail ?
                    detail.map((d, i) => {
                        return (
                            <div>
                                <DrawingStr key={`d_str_${i}`} drawing={d.drawing}/>
                                    {
                                        tech ?
                                            tech.map((t, j) => {
                                                return (
                                                    t.detail_id === d.id ?
                                                        <TechStr key={`t_str_${j}`}
                                                                 name={t.name}
                                                                 version={t.version}
                                                                 title={t.description}
                                                                 status={t.status_tech}
                                                                 clickable={true}/> : ''
                                                )
                                            }) : ''
                                    }
                            </div>
                        )
                    }) :
                    <div>
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton />
                        <Skeleton animation="wave" />
                    </div>
            }

            { addTech && <AddTech addTech={addTech} setAddTech={setAddTech} /> }

        </div>

    )
}

export default List

