import http from '../../utils/http';

export const getDataApi = () => (
    http.get(`/_debug/`)
);