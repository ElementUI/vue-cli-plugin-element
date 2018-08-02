import Vue from 'vue'
<%_ if (options.import === 'full') { _%>
import Element from 'element-ui'
<%_ if (options.customTheme) { _%>
import '../element-variables.scss'
<%_ } else { _%>
import 'element-ui/lib/theme-chalk/index.css'
<%_ } _%>
<%_ if (options.lang !== 'zh-CN') { _%>
import locale from 'element-ui/lib/locale/lang/<%= options.lang %>'

Vue.use(Element, { locale })
<%_ } else { _%>

Vue.use(Element)
<%_ } _%>
<%_ } else { _%>
import { Button } from 'element-ui'
<%_ if (options.lang !== 'zh-CN') { _%>
import lang from 'element-ui/lib/locale/lang/<%= options.lang %>'
import locale from 'element-ui/lib/locale'

locale.use(lang)
<%_ } _%>

Vue.use(Button)
<%_ } _%>
