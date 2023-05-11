import css from './TypingInformation.module.css'

export function TypingInformation() {
  return (
    <div className={css.root}>
      <h1 className={css.head}>Инструкция</h1>
      <div className={css.infoBlock}>
        <h3 className={css.infoBlockHead}>В чём смысл?</h3>
        <p className={css.infoText}>
          Главная идея слепой печати в том, что за каждым пальцем закреплена
          своя зона клавиш. Это позволяет печатать не глядя на клавиатуру.
          Регулярно тренируйтесь и, благодаря мышечной памяти, все ваши десять
          пальцев будут знать, куда нажать.
        </p>
      </div>

      <div className={css.infoBlock}>
        <h3 className={css.infoBlockHead}>Поза при печати текста</h3>
        <ul className={css.infoList}>
          <li className={css.infoListItem}>
            Сидите ровно и держите спину прямой.
          </li>
          <li className={css.infoListItem}>
            Локти держите согнутыми под прямым углом.
          </li>
          <li className={css.infoListItem}>
            Голова должна быть немного наклонена вперед.
          </li>
          <li className={css.infoListItem}>
            Расстояние от глаз до экрана должно быть 45-70 см.
          </li>
          <li className={css.infoListItem}>
            Расслабьте мышцы плеч, рук и кистей. Кисти могут немного касаться
            стола в нижней части клавиатуры, но не переносите вес тела на руки,
            чтобы не перенапрягать кисти.
          </li>
        </ul>
      </div>

      <div className={css.infoBlock}>
        <h3 className={css.infoBlockHead}>Исходная позиция</h3>
        <img
          className={css.fingerPositionImg}
          src="/images/main_keys.webp"
          alt="Расположение пальцев"
          width={800}
          height={227}
        />
        <p className={css.infoText}>
          Немного согните пальцы и положите их на клавиши ФЫВА и ОЛДЖ, которые
          находятся в среднем ряду. Эта строка называется ОСНОВНОЙ СТРОКОЙ,
          потому что вы всегда будете начинать с этих клавиш и возвращаться к
          ним. На клавишах А и О, под указательными пальцами, находятся
          небольшие выступы. Они позволяют ориентироваться на клавиатуре
          вслепую.
        </p>
      </div>

      <div className={css.infoBlock}>
        <h3 className={css.infoBlockHead}>Схема клавиатуры</h3>
        <img
          className={css.fingerPositionImg}
          width={800}
          height={335}
          src="/images/keyboard-2.png"
          alt="Расположение пальцев"
        />
        <p className={css.infoText}>
          Цвет клавиш на этой клавиатуре поможет вам понять и запомнить, каким
          пальцем на какую клавишу нужно нажимать.
        </p>
        <ul className={css.infoList}>
          <li className={css.infoListItem}>
            Нажимайте клавиши только тем пальцем, который для них предназначен.
          </li>
          <li className={css.infoListItem}>
            Всегда возвращайте пальцы в исходную позицию «ФЫВА – ОЛДЖ».
          </li>
          <li className={css.infoListItem}>
            Когда набираете текст, представляйте расположение клавиш.
          </li>
          <li className={css.infoListItem}>
            Установите ритм и соблюдайте его, пока печатаете. Нажимайте на
            клавиши с одинаковым интервалом.
          </li>
          <li className={css.infoListItem}>
            Клавишу SHIFT всегда нажимает мизинец с противоположной стороны от
            нужной буквы.
          </li>
          <li className={css.infoListItem}>
            Пробел отбивайте большим пальцем левой или правой руки, как вам
            удобнее.
          </li>
        </ul>
        <p className={css.infoText}>
          Сначала такой метод печати может показаться неудобным. Но не
          останавливайтесь. Со временем все будет получаться быстро, легко и
          удобно.
        </p>
      </div>

      <div className={css.infoBlock}>
        <h3 className={css.infoBlockHead}>Движение пальцев</h3>
        <p className={css.infoText}>
          Не подглядывайте на клавиатуру во время печати. Просто скользите
          пальцами по клавишам, пока не найдете основную строку. Ограничьте
          движение кистей и пальцев до минимума, только чтобы нажимать нужные
          клавиши. Держите руки и пальцы как можно ближе к исходной позиции. Это
          увеличит скорость набора текста и снизит нагрузку на кисти. Следите за
          безымянными пальцами и мизинцами, так как они часто остаются
          незадействованными.
        </p>
      </div>

      <div className={css.infoBlock}>
        <h3 className={css.infoBlockHead}>Скорость печати</h3>
        <ul className={css.infoList}>
          <li className={css.infoListItem}>
            Не пытайтесь сразу печатать со скоростью света. Начинайте
            ускоряться, только когда все 10 пальцев привыкнут нажимать
            правильные клавиши.
          </li>
          <li className={css.infoListItem}>
            Не торопитесь когда печатаете, чтобы избежать ошибок. Скорость будет
            возрастать постепенно.
          </li>
          <li className={css.infoListItem}>
            Всегда просматривайте текст на одно-два слова вперед.
          </li>
        </ul>
      </div>

      <div className={css.infoBlock}>
        <h3 className={css.infoBlockHead}>Берегите себя</h3>
        <p className={css.infoText}>
          Сделайте паузу, если чувствуете, что сбиваетесь и делаете много
          ошибок. Небольшой перерыв вернет силы и внимательность.
        </p>
      </div>
    </div>
  )
}
