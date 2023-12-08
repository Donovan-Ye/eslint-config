import type { ConfigItem, StylisticConfig } from '../types'
import { pluginDonovan, pluginStylistic } from '../plugins'

export function stylistic(options: StylisticConfig = {}): ConfigItem[] {
  const {
    indent = 2,
    jsx = true,
    quotes = 'single',
    semi = false,
  } = options

  const config = pluginStylistic.configs.customize({
    flat: true,
    indent,
    jsx,
    pluginName: 'style',
    quotes,
    semi,
  })

  return [
    {
      name: 'donovan:stylistic',
      plugins: {
        donovan: pluginDonovan,
        style: pluginStylistic,
      },
      rules: {
        ...config.rules,

        'curly': ['error', 'multi-or-nest', 'consistent'],

        'donovan/consistent-list-newline': 'error',
        'donovan/if-newline': 'error',
        'donovan/top-level-function': 'error',

        // 'style/indent': [
        //   'error',
        //   indent,
        //   {
        //     ArrayExpression: 1,
        //     CallExpression: { arguments: 1 },
        //     flatTernaryExpressions: false,
        //     FunctionDeclaration: { body: 1, parameters: 1 },
        //     FunctionExpression: { body: 1, parameters: 1 },
        //     ignoreComments: false,
        //     ImportDeclaration: 1,
        //     MemberExpression: 1,
        //     ObjectExpression: 1,
        //     outerIIFEBody: 1,
        //     SwitchCase: 1,
        //     VariableDeclarator: 1,
        //   },
        // ],
        'style/object-curly-newline': ['error', { consistent: true, minProperties: 6 }],
      },
    },
  ]
}
