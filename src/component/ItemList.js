import {Link, useLocation} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import ReactPaginate from "react-paginate";
import styles from "../css/itemList.module.css"
import {searchItem} from "../service/ItemService";
import {FadeLoader} from "react-spinners";


export default function ItemList() {
    const {search} = useLocation();
    const [itemPage, setItemPage] = useState(null)
    const [page, setPage] = useState({})
    let query = useQuery();

    function useQuery() {
        const {search} = useLocation();
        return useMemo(() => new URLSearchParams(search), [search]);
    }

    useEffect(() => {
        async function fetchApi() {
            const result = await searchItem(search)
            if (result.status === 200) {
                setItemPage(result.data.content)
                setPage(result.data)
            } else {
                console.log(result.status)
            }
        }

        fetchApi()
    }, [search]);

    async function handlePageClick(event) {
        console.log(event.selected)
        let result
        if (search !== "") {
            result = await searchItem(search + "&page=" + event.selected)
        } else {
            result = await searchItem("?page=" + event.selected)
        }
        if (result.status < 400) {
            setItemPage(result.data.content)
        }
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }

    return (
        <>
            {itemPage == null
                ? <FadeLoader className="mx-auto"/>
                : <div className="container-fluid">
                    {page.totalPages > 0 ?
                        <h2 className="main-color">Search result for: {query.get("name")}</h2>
                        : <h2 className="text-danger">No match found</h2>}
                    <div className="row row-cols-4 g-4">
                        {itemPage.map((item) => (
                            <Link key={item.itemId} to={`/product/${item.itemId}`} className="text-decoration-none">
                                <div className={`card col border-0 ${styles.card}`}>
                                    <img
                                        src={item.url}
                                        className="card-img-top card-img-bottom" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">{item.itemName}</p>
                                        <div className="d-flex justify-content-between flex-lg-wrap">
                                            <p className="text-danger fs-5 fw-bold">{item.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <ReactPaginate
                        previousLabel="<"
                        nextLabel=">"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        pageCount={page.totalPages}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={2}
                        onPageChange={handlePageClick}
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </div>}
        </>
    )
}