import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import 'element-ui/packages/theme-chalk/lib/index.css';
import {
    Alert,
    Button, Card, Form, Select, Input, FormItem, Option
} from 'element-ui';
  const elements = [
      Button, Card, Form, Alert, Select, Input, FormItem, Option
  ];

  locale.use(lang);
  elements.forEach(E1 => Vue.use(E1,{locale}));