// НАЧАЛО РАБОТЫ С GIT
// После всей чепухи, типа установки git, регистрации на github и указания имени, эл. почты в терминале, в папке с проектом открываем терминал, и пишем git init.

// Команда git status
// С помощью этой команды можно посмотреть статус репозитория

// Добавление новых файлов в проект git add <file>
// После добавления новых файлов в проект, git не следит за их изменениями, они помечаются как "неотслеживаемые файлы". Чтобы они начали отслеживаться, нужно прописать команду "git add <file>" для каждого нового или изменённого файла. После этого в статусе git-а можем увидеть, какие файлы отслеживаются, а какие нет.

// git commit -m"<description>"
// Следующий шаг - это коммит. Это окончательное добавление файлов в репозиторий, когда git запоминает файл навсегда и следит за всеми его последующими изменениями. Коммит делаем только после команды отслеживания файлов git add <file>. Флаг -m означает message(Описание коммита). После коммита, в статусе можем увидеть, что файл который закоммитили, исчез

// Подключаем удалённый репозиторий github:
// 1) Создаём репозиторий на github
// 2) После создания, заходим в наш проект и пишем команду: git remote add origin <ссылка на удалённый репозиторий>. Она нас подключит к репозиторию github
// 3) Пишем команду: git branch -M <имя ветки> (Что-то делаем с веткой. Что такое -M???)
// 4) Пишем команду: git push -u origin master (Пушим на удалённый репозиторий. Что такое -u???)

// Клонируем репозиторий git clone
// После того, как запушили файлы, мы можем их взять с удалённого репозитория в другом проекте. Создадим новый проект clone и впишем там в терминал команду: git clone <ссылка на репозиторий(взять в github)>. После этого все файлы и папки появятся у нас в локальном проекте

// Получение изменений с удалёнки git pull --rebase
// Для получения новых изменений нужно прописать git pull --rebase. Писать просто git pull не стоит, это может привести к созданию ненужных коммитов. Сейчас запушим наш конспект и попробуем получить его в другом проекте

// Как git отслеживает изменения и как восстановить удалённый файл git restore <file>
// Если попробуем удалить файл, git увидит, что мы его удалили и сообщит нам об этом в git status. Вопрос, как git вообще видит изменения?
// В проекте мы видим файлы проекта с одной стороны и директорию git с другой. Репозиторием является именно git. Он хранит всю информацию об изменениях и сами изменения. А вот всё, что находится снаружи, это рабочая директория. Каждый раз, когда мы вносим изменения в рабочей директории, git сравнивает изменённые файлы с файлами внутри git. Именно так git сообщает о внесённых изменениях
// После удаления файла напишем git status. Там увидим сообщение от git, какой файл удалён. Также git предложит команду по восстановлению удалённого файла git restore <file>, Напишем её
// 
// git rm <file>
// Если мы делаем коммит после удаления файла, удалённый файл тоже нужно индексировать!!! Любые внесённые изменения нужно индексировать!!! У git есть команда git rm <file>, которая удаляет и сразу индексирует файл

// Просмотр разницы между "Как было" и "Как стало" git diff; git diff --staged
// При работе с большим проектом, мы можем просто напросто забыть, где мы вносили изменения. Чтобы проанализировать, в каких файлах мы вносили изменения, используем команду git diff. ВНИМАНИЕ!!! ЧТОБЫ ПЕРЕДВИГАТЬСЯ В ОКНЕ ПОСЛЕ ВВОДА КОМАНДЫ git diff, НУЖНО ИСПОЛЬЗОВАТЬ КНОПКИ:
// f - вниз
// b или u - вверх
// q - выход из режима просмотра
// По умолчанию git diff показывает изменения только для тех файлов, которые не были проиндексированы. Чтобы увидеть изменения в проиндексированных файлах, нужно написать команду git diff --staged

// Просмотр коммитов git log
// С помощью команды git log мы можем посмотреть историю коммитов. Сверху оттображаются последние коммиты
// С помощью флажка git log -p можем посмотреть диф для каждого коммита

// Просмотр изменений в рамках одного коммита git show
// Чтобы посмотреть диф в рамках одного коммита, пишем git show <коммит>. У каждого коммита есть свой id, его можно посмотреть с помощью команды git log. id у коммитов слишком длинные. Чтобы не вписывать такую длинную строку, достаточно вбить первые 7 символов

// Узнаём, кто вносил изменения в строчках git blame <file>
// В этой команде напротив каждой строчки выводится имя разработчика, который вносил изменения в строчках. Если строчки ещё не успели закоммитить, то имени там не будет

// Ищем совпадение с указанной строкой git grep <str>
// Эта команда показывает, в каком файле есть совпадение с указанной строкой

// Очищаем добавленные неотслеживаемые файлы git clean -fd
// Например, мы добавили новый файл, но по итогу он нам оказался не нужен. Команда git clean -fd (f - force; d - directory) удалит все незакоммиченные изменения

// Отменяем изменения в проиндексированных файлах git restore --staged <file>
// Чтобы отменить индексацию файла, но не удалять внесённые изменения в рабочей директории, пишем команду git restore --staged <file>. А если хотим отменить внесённые изменения, то пишем после прошлой команды, как мы уже знаем, git restore <file>

// Отмена коммитов. git revert <id коммита>
// Команда git revert <id коммита> создаёт новый коммит, в котором отменяет изменения указанного коммита.
// Например создадим новый файл. Далее внесём изменения в других файлах, сделаем коммит. И ещё раз внесём некие изменения и сделаем коммит. После этого мы понимаем, что файл, который был создан в позапрошлом коммите нам не нужен. Для этого пишем команду git revert <id коммита>. Эта команда делает противоположные действия указанному коммиту и записывает в новый коммит

// Удаляем коммит. git reset (В этой команде может быть множество флажков. Тут затронем только базу)
// Можно удалять только крайние коммиты. Например последний коммит, последние два коммита и т.д. 
// Удалять коммиты можно только в том случае, если они не отправлены на удалённый репозиторий!!! И если мы полностью уверенны, что этот коммит нам не нужен!!!
// Для удаления последнего коммита пишем команду git reset --hard HEAD~
// Флаг --hard означает полное удаление. Без него git reset отменит коммит, но не удалит его, а пометит все внесённые изменения в рабочую директорию. Так что с ним можно будет продолжить работать
// Флаг HEAD~ означает "один коммит от последнего коммита". Чтобы удалить например 2 коммита, пишем HEAD~2

// HEAD означает голова. Она отмечает последний сделанный коммит.

// По случайности не долили изменённые файлы в уже сделанный коммит. git commit --amend
// Например мы вносили изменения в 2 файла, но закоммитили только один, а нужно было оба. Чтобы не создавать лишний коммит с внесением упущенного файла, мы можем его внести в сделанный коммит с помощью флажка --amend. 
// Для начала как обычно индексируем файл, затем пишем пишем git commit --amend. После этого мы увидим сообщение, которое нам предложит изменить описание коммита. Чтобы нам не всплывало такого сообщения, напишеи дополнительные флажки git commit --amend --no-edit
// Также, чтобы изменить описание коммита, мы можем прописать так: git commit --amend -m"<Описание>"

// Фишки с индексацией и коммитом
// Можно проиндексировать сразу все файлы, в которые внесли изменения с помощью команды git add .
// Можно БЕЗ ИНДЕКСАЦИИ сразу закоммитить файлы (если речь идёт о небольшом колличестве файлов) с помощью команды git commit <file> -m"Описание"
// Также можно закоммитить СРАЗУ ВСЕ ФАЙЛЫ БЕЗ ИНДЕКСАЦИИ с помощью команды git commit -am "Описание"
// И ещё есть команда git add -i. Эта команда показывает изменённые куски фалов и что с ними делать (В ЭТОЙ КОМАНДЕ НУЖНО ПДРОБНО РАЗОБРАТЬСЯ). Также с помощью этой команды МОЖНО ИНДЕКСИРОВАТЬ НЕ ВСЕ ВНЕСЁННЫЕ ИЗМЕНЕНИЯ В ФАЙЛ!!!

// Переключаемся к нужному коммиту git checkout
// Чтобы переключиться к нужному коммиту, нужно написать команду git checkout <id коммита>. После переключения, в нашей рабочей директории отобразится история файлов на момент указанного коммита. Чтобы вернуться обратно к последнему коммиту, нужно написать команду git checkout <Имя ветки> (Ветки тут ещё не изучали).

// Проверяем, где мы находимся в данный момент git branch
// С помощью команды git branch мы можем посмотреть, в какой ветке мы находимся. Но если мы находимся в каком-то коммите из прошлого, то увидим не только ветки, но и id коммита

// Просмотр ветвления веток: git log --graph

// Чтобы переключаться между ветками, используем команду git switch <Ветка>

// GITIGNORE
// В проектах всегда есть файлы, которые git должен проигнорировать. Чтобы игнорировать те или иные файлы, нужно в корне проекта создать файл с именем .gitignore
// В этом файле можно оставлять комментарии с помощью решётки #. Каждая строчка отвечает за определённый файл или директорию (Просто на каждой строчке нужно прописывать путь к файлам или папкам. Примеры путей указаны непосредственно в gitignore)
// В случае, если мы уже сделали коммит файла, но потом поняли, что нам его отслеживать не нужно, его надо сначало удалить из репозитория git с помощью команды git rm --cached <file>. Только после этого файл будет игнорироваться

// Прячем изменённые файлы. git stash
// Представим ситуацию, мы работаем с определённой задачей и изменили уже множество файлов. Но вдруг нам понадобилось внести изменение в файле, который не затрагивает поставленную задачу. В таком случае мы можем временно спрятать все изменённые файлы в рабочей директории с помощью команды git stash. Она не удаляет файлы, а временно их прячет вне зависимости, были они проиндексированы или нет.
// Чтобы вернуть файлы в исходное состояние, используем команду git stash pop