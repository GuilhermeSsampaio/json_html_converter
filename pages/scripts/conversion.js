import React from 'react';
import EditorJSHTML from 'editorjs-html';

function EditorContent() {
    const editorData = {

        "time": 1627385326368,
        "blocks": [
          {
            "type": "header",
            "data": {
              "text": "Título do Artigo",
              "level": 2
            }
          },
          {
            "type": "paragraph",
            "data": {
              "text": "Este é um parágrafo de exemplo."
            }
          },
          {
            "type": "list",
            "data": {
              "style": "unordered",
              "items": ["Item 1", "Item 2", "Item 3"]
            }
          }
        ]
      }

  // Convert Editor.js content to HTML with custom classes
  const htmlContent = convertToHTML(editorData);

  function convertToHTML(editorData) {
    let tituloHTML = '';
    let paragrafosHTML = '';
    let listaHTML = '';

    editorData.blocks.forEach((block) => {
      switch (block.type) {
        case 'header':
          tituloHTML += `<h${block.data.level} class="titulo">${block.data.text}</h${block.data.level}>`;
          break;
        case 'paragraph':
          paragrafosHTML += `<p class="paragrafo">${block.data.text}</p>`;
          break;
        case 'list':
          const listType = block.data.style === 'ordered' ? 'ol' : 'ul';
          let listItemsHTML = '';
          block.data.items.forEach((item) => {
            listItemsHTML += `<li>${item}</li>`;
          });
          listaHTML += `<${listType} class="lista">${listItemsHTML}</${listType}>`;
          break;
        // Adicione outros casos para outros tipos de blocos do Editor.js, se necessário.
        default:
          break;
      }
    });

    return {
      titulo: tituloHTML,
      paragrafos: paragrafosHTML,
      lista: listaHTML,
    };
  }

  return (
    <div>
      {/* Renderize o conteúdo HTML com as classes CSS personalizadas */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent.titulo }} />
      <div dangerouslySetInnerHTML={{ __html: htmlContent.paragrafos }} />
      <div dangerouslySetInnerHTML={{ __html: htmlContent.lista }} />
    </div>
  );
}

export default EditorContent;
