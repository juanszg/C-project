import {topics} from './data.js';
export const searchTopics=q=>{const s=q.trim().toLowerCase();return s?topics.filter(t=>`${t.name} ${t.description} ${t.category}`.toLowerCase().includes(s)):[]};
