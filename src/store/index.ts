import { WidgetData } from 'src/widget';
import { unique } from 'src/lib/native';

/** 是否是调试模式 */
export let debug = false;
/** APP 编号 */
export let messengerAppId = process.env.appId as string;
/** 是否强行禁用 Facebook 相关事件 */
export let disableFacebook = false;
/** 语言类型 */
export let language: 'zh_CN' | 'zh_TW' | 'en_US' = 'en_US';
/** 插件配置 */
export let widgets: WidgetData[] = [];

/** 初始化参数 */
interface BothubInitParams {
    /** 是否是调试模式 */
    debug?: typeof debug;
    /**
     * APP 编号
     *  - debug 选项为 true 时才会生效
     */
    appId?: typeof messengerAppId;
    /** 是否禁用 Facebook 相关功能 */
    disableFacebook?: typeof disableFacebook;
    /** 语言类型 */
    language?: typeof language;
    /** 页面插件数据 */
    widgets?: typeof widgets;
}

/** 初始化函数 */
export function setGlobalParams(param: BothubInitParams) {
    if (param.language) {
        language = param.language;
    }

    if (param.debug) {
        debug = param.debug;

        // 只有调试模式允许
        if (param.appId) {
            messengerAppId = param.appId;
        }
    }

    // 合并插件列表
    widgets = unique(widgets.concat(param.widgets || []), ({ id }) => id);
}
