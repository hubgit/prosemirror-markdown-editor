const { exampleSetup } = require('prosemirror-example-setup')
const { schema, defaultMarkdownParser, defaultMarkdownSerializer } = require('prosemirror-markdown')
const { EditorState } = require('prosemirror-state')
const { EditorView } = require('prosemirror-view')

class Editor {
  constructor(target, content) {
    this.view = new EditorView(target, {
      state: EditorState.create({
        doc: defaultMarkdownParser.parse(content),
        plugins: exampleSetup({schema})
      })
    })
  }

  get content() {
    return defaultMarkdownSerializer.serialize(this.view.state.doc)
  }

  focus() {
    this.view.focus()
  }

  destroy() {
    this.view.destroy()
  }
}

module.exports = { Editor }
