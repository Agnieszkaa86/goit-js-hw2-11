import './sass/index.css'

const axios = require('axios');
import axios from 'axios';
import { Notify } from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const apiKey = '28056380-7ebf030984661b6034d156d96';

const form = document.querySelector("#search-form");
const input = document.querySelector(".search-form__input");
const gallery = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector(".load-more");

