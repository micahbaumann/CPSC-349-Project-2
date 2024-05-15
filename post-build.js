const fs = require('fs');

// Read ASCII art from ascii-art.txt
// const asciiArt = fs.readFileSync('ascii-art.txt', 'utf8');

// Read index.html
let indexHtml = fs.readFileSync('build/index.html', 'utf8');
let build404Html = fs.readFileSync('build/404.html', 'utf8');

// Insert ASCII art at the top of the file
indexHtml = "\
<!-------------------------------------------------------------------------------------------------\n\
\n\
                                                                           ///////\\\\\\\\\\\\\\|||||||\n\
                                                                           ///////\\\\\\\\\\\\\\|||||||\n\
                                                                           ///////\\\\\\\\\\\\\\|||||||\n\
     _____       _         _______        _                 _             _              \\\\\\\\\\\\\\\n\
    |  __ \\     | |       |__   __|      | |               | |           (_)             \\\\\\\\\\\\\\\n\
    | |__) |   _| |_ ___     | | ___  ___| |__  _ __   ___ | | ___   __ _ _  ___  ___    \\\\\\\\\\\\\\\n\
    |  _  / | | | __/ __|    | |/ _ \\/ __| '_ \\| '_ \\ / _ \\| |/ _ \\ / _` | |/ _ \\/ __|   ///////\n\
    | | \\ \\ |_| | |_\\__ \\    | |  __/ (__| | | | | | | (_) | | (_) | (_| | |  __/\\__ \\   ///////\n\
    |_|  \\_\\__,_|\\__|___/    |_|\\___|\\___|_| |_|_| |_|\\___/|_|\\___/ \\__, |_|\\___||___/   ///////\n\
                                                                     __/ |            \n\
                                                                    |___/             \n\
\n\
-------------------------------------------------------------------------------------------------->\n\
\n\
" + indexHtml;

build404Html = indexHtml;

// Write modified index.html back to the file
fs.writeFileSync('build/index.html', indexHtml);
fs.writeFileSync('build/404.html', build404Html);

console.log('Post-build script completed.');