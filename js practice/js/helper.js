//Print's out songs in an ordered list format
let printList = list => {
  let htmlList = '<ol>';
  for (let i = 0; i < list.length; i++) {
    htmlList += '<li>' + list[i] + '</li>';
  }

  htmlList += '</ol>';
  print(htmlList);
};

let print = html => document.write(html);
