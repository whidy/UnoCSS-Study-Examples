import type { Rule, UserShortcuts } from "unocss";
// import type { Theme } from "unocss/preset-uno";
import { toEscapedSelector as e } from "unocss";
export const rules: Rule[] = [
  // 请注意，[, name, count]内的所有变量都是String类型，可以查阅，故而下方使用repeat时转换成数字类型
  [/^name-(.+)-(\d+)$/, ([, name, count], { rawSelector, currentSelector, variantHandlers, theme }) => {
    const selector = e(rawSelector);
    // console.log(theme);
    // console.log({match, selector, rawSelector, currentSelector, variantHandlers});
    //  @apply的末尾忘记写分号会导致编译报错，开发环境不会报错。错误信息大致是：js-unocss-hash.css:5:34: Unknown word
    return `
${selector} {
position: relative;
cursor: pointer;
@apply border-l-2 pl-2 b-pink-2 mb-4;
}
${selector}::after {
content: "${name.concat("~").repeat(Number(count))}";
font-size: 1.5em;
position: absolute;
top: 0;
left: 0;
transform: translate(20%, 0%);
color: ${theme.colors.pink[2]};
}
${selector}:hover::after {
color: ${theme.colors.pink[4]};
}
`;
  }, {
      layer: "whidy"
    }],
];
export const shortcuts: UserShortcuts = [
  {
    "gradient-header": "text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent",
  }, // ShortcutValue
  [
    /^gradient-(\w+)-(\w+)$/, ([, colorFrom, colorTo]) => `bg-gradient-to-r from-${colorFrom}-400 to-${colorTo}-500  bg-clip-text text-transparent`
  ] // Shortcut
];
