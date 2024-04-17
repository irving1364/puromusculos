const SearchForm = () => (
    <form className="search-form-wrapper" action="#">
        <input type="search" placeholder="Buscar Productos..." aria-label="Search" />
        <div className="search-icon">
            <button type="button">
                <i className="feather-search" />
            </button>
        </div>
    </form>
);

export default SearchForm;
