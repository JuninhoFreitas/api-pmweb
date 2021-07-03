--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    order_id character varying NOT NULL,
    order_date timestamp without time zone NOT NULL,
    product_sku character varying NOT NULL,
    "SIZE" character varying NOT NULL,
    color character varying,
    quantity integer NOT NULL,
    price numeric(10,2) NOT NULL
);

--
-- PostgreSQL database dump complete
--

