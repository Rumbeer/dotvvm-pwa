interface Array<T> {
    equals(other: Array<T>): boolean;
    includes(searchElement: T, fromIndex?: number): boolean;
}
interface JQuery {
    visible(handler: () => void): JQuery;
    input(handler: (eventObject: JQueryEventObject) => any): JQuery;
    input(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
}
interface BaseJQueryEventObject {
    stopPropagationAndPreventDefault(): any;
}
declare type KnockoutObservableOr<T> = KnockoutObservable<T> | T;
declare type KnockoutObservableArrayOr<T> = KnockoutObservableArray<T> | T[];
interface String {
    startsWith(searchString: string, position?: number): boolean;
    endsWith(searchString: string, position?: number): boolean;
    padStart(targetLength: number, padString?: string): string;
    padEnd(targetLength: number, padString?: string): string;
    repeat(count: number): string;
}
declare namespace DotVVM.BusinessPack {
    enum RgbaChannel {
        Red = 0,
        Green = 1,
        Blue = 2,
        Alpha = 3
    }
}
declare namespace DotVVM.BusinessPack {
    class BusinessPackCss {
        static control: string;
        static alert: string;
        static autoComplete: string;
        static button: string;
        static calendar: string;
        static carousel: string;
        static checkBox: string;
        static checkBoxList: string;
        static colorPicker: string;
        static comboBox: string;
        static copyButton: string;
        static dataPager: string;
        static datePicker: string;
        static dateRangePicker: string;
        static dateTimePicker: string;
        static dateTimeRangePicker: string;
        static dialog: string;
        static draggableList: string;
        static dropDownButton: string;
        static dropDownList: string;
        static editableLiteral: string;
        static fileUpload: string;
        static filterBuilder: string;
        static filterEditor: string;
        static formItem: string;
        static gridView: string;
        static gridViewRowSelectColumn: string;
        static gridViewUserSettingsEditor: string;
        static icon: string;
        static imageCrop: string;
        static listView: string;
        static maskedTextBox: string;
        static modalDialog: string;
        static multiSelect: string;
        static numericUpDown: string;
        static panel: string;
        static radioButton: string;
        static radioButtonList: string;
        static rangeCalendar: string;
        static rangeSlider: string;
        static rating: string;
        static richTextBox: string;
        static slider: string;
        static switchButton: string;
        static tabControl: string;
        static text: string;
        static textBox: string;
        static timePicker: string;
        static timeRangePicker: string;
        static toggleButton: string;
        static toolbar: string;
        static toolbarButton: string;
        static tooltip: string;
        static treeView: string;
        static textView: string;
        static window: string;
        static flagAnimated: string;
        static flagAutoFocusable: string;
        static flagCustomAllowed: string;
        static flagDismissible: string;
        static flagExpandable: string;
        static flagFocusPrevented: string;
        static flagInline: string;
        static flagMultiline: string;
        static flagOverflowHidden: string;
        static flagUnselectAllowed: string;
        static flagRounded: string;
        static flagWithList: string;
        static flagIe: string;
        static flagDefaultTemplate: string;
        static stateActive: string;
        static stateBusy: string;
        static stateChecked: string;
        static stateDataEmpty: string;
        static stateDisabled: string;
        static stateDragover: string;
        static stateError: string;
        static stateExpanded: string;
        static stateFocused: string;
        static stateHalfSelected: string;
        static stateHidden: string;
        static stateHiding: string;
        static stateIndeterminate: string;
        static stateLoading: string;
        static stateMoving: string;
        static stateOpened: string;
        static stateResizing: string;
        static stateSelected: string;
        static stateSemiDisabled: string;
        static stateShowing: string;
        static stateSortedAsc: string;
        static stateSortedDesc: string;
        static stateValueEmpty: string;
        static primitiveBody: string;
        static primitiveButton: string;
        static primitiveButtonGroup: string;
        static primitiveButtonIcon: string;
        static primitiveButtonNav: string;
        static primitiveCheckBox: string;
        static primitiveCheckerboard: string;
        static primitiveContainer: string;
        static primitiveContents: string;
        static primitiveDropDown: string;
        static primitiveDropZone: string;
        static primitiveEditor: string;
        static primitiveErrorMessage: string;
        static primitiveFooter: string;
        static primitiveGrip: string;
        static primitiveGripE: string;
        static primitiveGripN: string;
        static primitiveGripNE: string;
        static primitiveGripNW: string;
        static primitiveGripS: string;
        static primitiveGripSE: string;
        static primitiveGripSW: string;
        static primitiveGripW: string;
        static primitiveGroup: string;
        static primitiveHeader: string;
        static primitiveInput: string;
        static primitiveInputGroup: string;
        static primitiveItem: string;
        static primitiveLabel: string;
        static primitiveLine: string;
        static primitiveList: string;
        static primitiveNav: string;
        static primitiveOverlay: string;
        static primitivePicker: string;
        static primitivePlaceholder: string;
        static primitivePoint: string;
        static primitivePopup: string;
        static primitiveProgressBar: string;
        static primitiveRadioButton: string;
        static primitiveRows: string;
        static primitiveSelectionBox: string;
        static primitiveSeparator: string;
        static primitiveSide: string;
        static primitiveSlider: string;
        static primitiveSwitchButton: string;
        static primitiveTable: string;
        static primitiveTemplate: string;
        static primitiveText: string;
        static primitiveTextArea: string;
        static primitiveTextBox: string;
        static primitiveTitlebar: string;
        static primitiveToolbar: string;
        static primitiveValue: string;
        static positionEnd: string;
        static positionStart: string;
        static displayFlex1: string;
        static displayFlex0: string;
        static alignCenter: string;
        static alignLeft: string;
        static alignRight: string;
        static commandAdd: string;
        static commandAddFilter: string;
        static commandAddGroup: string;
        static commandClose: string;
        static commandCancel: string;
        static commandCollapse: string;
        static commandConfirm: string;
        static commandDecrease: string;
        static commandDelete: string;
        static commandExpand: string;
        static commandIncrease: string;
        static commandMaximize: string;
        static commandNext: string;
        static commandOpen: string;
        static commandPrev: string;
        static commandReset: string;
        static commandRestore: string;
        static commandRotateLeft: string;
        static commandRotateRight: string;
        static commandSwitch: string;
        static commandSelectFiles: string;
        static commandToggle: string;
        static commandUnselect: string;
        static commandZoomIn: string;
        static commandZoomOut: string;
        static alertTypeIcon: string;
        static alertTypePrefix: string;
        static buttonTypePrefix: string;
        static calendarDay: string;
        static calendarDayHeader: string;
        static calendarDecadeView: string;
        static calendarLeap: string;
        static calendarMonth: string;
        static calendarMonthView: string;
        static calendarOther: string;
        static calendarToday: string;
        static calendarWeek: string;
        static calendarWeekHeader: string;
        static calendarWeekNumber: string;
        static calendarYear: string;
        static calendarYearView: string;
        static calendarDateSelector: string;
        static calendarHourSelector: string;
        static calendarMain: string;
        static calendarMinuteSelector: string;
        static calendarMonthSelector: string;
        static calendarOtherMonth: string;
        static calendarSelector: string;
        static calendarSelectorEnd: string;
        static calendarSelectorStart: string;
        static calendarSelectionEnd: string;
        static calendarSelectionStart: string;
        static calendarTable: string;
        static calendarUpperRow: string;
        static calendarWeekend: string;
        static calendarYearSelector: string;
        static colorPickerAlphaEditor: string;
        static colorPickerAlphaSlider: string;
        static colorPickerAlphaWrapper: string;
        static colorPickerBlueEditor: string;
        static colorPickerEditor: string;
        static colorPickerGreenEditor: string;
        static colorPickerHexEditor: string;
        static colorPickerHueSlider: string;
        static colorPickerPalette: string;
        static colorPickerPredefinedColors: string;
        static colorPickerPreview: string;
        static colorPickerRedEditor: string;
        static colorPickerRgbaEditor: string;
        static colorPickerRgbEditor: string;
        static colorPickerSliders: string;
        static colorPickerSpectrum: string;
        static dateTimeToolbar: string;
        static dialogBase: string;
        static dialogGrip: string;
        static windowMovable: string;
        static dialogHorizontalAlignCenter: string;
        static dialogHorizontalAlignLeft: string;
        static dialogHorizontalAlignRight: string;
        static dialogVerticalAlignCenter: string;
        static dialogVerticalAlignTop: string;
        static dialogVerticalAlignBottom: string;
        static fileUploadFiles: string;
        static fileUploadPanel: string;
        static filterEditorOperatorEditor: string;
        static filterEditorValueEditor: string;
        static formItemAfterControlTemplateWrapper: string;
        static formItemBeforeControlTemplateWrapper: string;
        static formItemControl: string;
        static formItemLabel: string;
        static formItemHint: string;
        static formItemValidatorPositionAfter: string;
        static formItemValidatorPositionBefore: string;
        static formItemValidation: string;
        static formItemValidationIcon: string;
        static gridViewColumnFooterRow: string;
        static gridViewColumnHeaderRow: string;
        static gridViewEmptyRow: string;
        static gridViewFilterRow: string;
        static gridViewFooterRow: string;
        static gridViewHeaderRow: string;
        static gridViewFixedHeaderRow: string;
        static gridViewSortButton: string;
        static gridViewHeaderValue: string;
        static gridViewSelectedRow: string;
        static imageCropCropCanvas: string;
        static imageCropImageCanvas: string;
        static listViewDisplayModeList: string;
        static listViewDisplayModeTiles: string;
        static ratingHalfFill: string;
        static richTextBoxParagraphStyleList: string;
        static sliderMaxGrip: string;
        static sliderMinGrip: string;
        static switchButtonToggle: string;
        static tabControlNav: string;
        static tabControlItem: string;
        static tabControlContent: string;
        static tabControlNavItem: string;
        static timePickerHour: string;
        static timePickerHourDial: string;
        static timePickerMinute: string;
        static timePickerMinuteDial: string;
        static timePickerSecond: string;
        static timePickerSecondDial: string;
        static timePickerDesignator: string;
        static timePickerDesignatorDial: string;
        static timePickerTimeDial: string;
        static timePickerNow: string;
        static timePickerSeparator: string;
        static toggleButtonPrefix: string;
        static toggleButtonTypeToggle: string;
        static toggleButtonTypeSwitch: string;
        static treeViewList: string;
        static treeViewListItem: string;
        static treeViewListButtons: string;
        static treeViewLabel: string;
    }
}
declare namespace DotVVM.BusinessPack {
    class MouseButtons {
        static left: number;
        static middle: number;
        static right: number;
    }
}
declare namespace DotVVM.BusinessPack {
    class KeyboardKeys {
        static a: number;
        static b: number;
        static c: number;
        static d: number;
        static e: number;
        static f: number;
        static g: number;
        static h: number;
        static i: number;
        static j: number;
        static k: number;
        static l: number;
        static m: number;
        static n: number;
        static o: number;
        static p: number;
        static q: number;
        static r: number;
        static s: number;
        static t: number;
        static u: number;
        static v: number;
        static w: number;
        static x: number;
        static y: number;
        static z: number;
        static num0: number;
        static num1: number;
        static num2: number;
        static num3: number;
        static num4: number;
        static num5: number;
        static num6: number;
        static num7: number;
        static num8: number;
        static num9: number;
        static numpadZero: number;
        static numpadOne: number;
        static numpadTwo: number;
        static numpadThree: number;
        static numpadFour: number;
        static numpadFive: number;
        static numpadSix: number;
        static numpadSeven: number;
        static numpadEight: number;
        static numpadNine: number;
        static numpadMultiply: number;
        static numpadAdd: number;
        static numpadEnter: number;
        static numpadSubtract: number;
        static numpadDecimal: number;
        static numpadDivide: number;
        static f1: number;
        static f2: number;
        static f3: number;
        static f4: number;
        static f5: number;
        static f6: number;
        static f7: number;
        static f8: number;
        static f9: number;
        static f10: number;
        static f11: number;
        static f12: number;
        static f13: number;
        static f14: number;
        static f15: number;
        static colon: number;
        static equals: number;
        static underscore: number;
        static questionMark: number;
        static tilde: number;
        static openBracket: number;
        static backwardSlash: number;
        static closeBracket: number;
        static quotes: number;
        static lessThan: number;
        static greaterThan: number;
        static backspace: number;
        static tab: number;
        static clear: number;
        static enter: number;
        static shift: number;
        static control: number;
        static alt: number;
        static capsLock: number;
        static esc: number;
        static spacebar: number;
        static pageUp: number;
        static pageDown: number;
        static end: number;
        static home: number;
        static left: number;
        static up: number;
        static right: number;
        static down: number;
        static insert: number;
        static delete: number;
        static help: number;
        static numLock: number;
        static isWhiteSpace(key: number): boolean;
        static isUpOrDown(key: number): boolean;
        static isLeftOrRight(key: number): boolean;
        static isArrow(key: number): boolean;
        static isEnter(key: number): boolean;
        static isDeleteOrBackspace(key: number): boolean;
        static isBackspace(key: number): boolean;
        static isDelete(key: number): boolean;
    }
}
declare namespace DotVVM.BusinessPack {
    class Browser {
        static userAgent: string;
        static readonly isIe: boolean;
        static readonly isEdge: boolean;
        static readonly isChrome: boolean;
        static readonly isGecko: boolean;
        static readonly isFirefox: boolean;
        static readonly isSafari: boolean;
        static readonly isMobileOrTablet: boolean;
    }
}
declare namespace DotVVM.BusinessPack {
    class Linq<T> {
        private readonly a;
        constructor(a?: T[]);
        aggregate<TResult>(func: (previous: T, next: T) => TResult): T;
        all(predicate: (value: T) => boolean): boolean;
        any(predicate?: (value: T) => boolean): boolean;
        average(selector?: (value: T) => number): number;
        concat(array: T[]): Linq<T>;
        contains(value: T, comparer?: EqualityComparer<T>): boolean;
        count(selector?: (value: T) => boolean): number;
        distinct(comparer?: EqualityComparer<T>): Linq<T>;
        distinctBy<TU>(selector: (e: T) => TU, comparer?: EqualityComparer<T>): Linq<T>;
        elementAt(index: number): T;
        elementAtOrDefault(index: number, defaultValue?: T): T;
        except(except: T[], comparer?: EqualityComparer<T>): Linq<T>;
        first(selector?: (e: T) => boolean): T;
        firstOrDefault(selector?: (e: T) => boolean, defaultValue?: T): T;
        forEach(callback: (e: T, index: number) => any): void;
        groupBy<TKey, TElement>(keySelector: (e: T) => TKey, elementSelector?: (e: T) => TElement, comparer?: EqualityComparer<TKey>): Linq<any>;
        indexOf(e: T, comparer?: EqualityComparer<T>): number;
        intersect(array: T[], comparer?: EqualityComparer<T>): Linq<T>;
        join<TInner, TKey, TResult>(array: TInner[], outerKeySelector: (e: T) => TKey, innerKeySelector: (e: TInner) => TKey, resultSelector: (outer: T, inner: TInner) => TResult, comparer?: EqualityComparer<TKey>): Linq<TResult>;
        last(predicate?: (e: T) => boolean): T;
        lastOrDefault(predicate?: (e: T) => boolean, defaultValue?: T): T;
        max<TResult>(selector?: (e: T) => TResult): TResult;
        min<TResult>(selector?: (e: T) => TResult): TResult;
        orderBy<TKey>(keySelector: (e: T) => TKey, comparer?: (a: TKey, b: TKey) => number): Linq<T>;
        orderByDescending<TKey>(keySelector: (e: T) => TKey, comparer?: (a: TKey, b: TKey) => number): Linq<T>;
        reverse(): Linq<T>;
        select<TResult>(selector: (e: T, i?: number) => TResult): Linq<TResult>;
        selectMany<TResult>(selector: (e: T) => T[], resultSelector?: (e: T) => TResult): Linq<TResult>;
        sequenceEqual(second: T[], comparer?: (a: T, b: T) => boolean): boolean;
        single(predicate?: (e: T) => boolean): T;
        singleOrDefault(predicate?: (e: T) => boolean, defaultValue?: T): T;
        skip(count: number): Linq<T>;
        skipWhile(predicate: (e: T) => boolean): Linq<T>;
        sum(selector?: (value: T) => number): number;
        take(count: number): Linq<T>;
        takeWhile(predicate: (e: T) => boolean): Linq<T>;
        union(second: T[], comparer?: EqualityComparer<T>): Linq<T>;
        where(selector: (value: T) => boolean): Linq<T>;
        zip<TInner, TResult>(array: TInner[], resultSelector: (o: T, i: TInner) => TResult): Linq<TResult>;
        toArray(): T[];
    }
    interface EqualityComparer<T> {
        equals(x: T, y: T): boolean;
        getHashCode(obj: T): number;
    }
    interface Grouping<TKey, T> {
        key: TKey;
        elements: T[];
    }
}
interface Array<T> {
    asLinq(): DotVVM.BusinessPack.Linq<T>;
    asLinq<TOther>(): DotVVM.BusinessPack.Linq<TOther>;
}
interface Object {
    getHashCode(e: any): number;
}
interface Object {
    isPlain(e: any): boolean;
}
interface JSON {
    stringifyNonCircular(obj: any): string;
}
declare namespace DotVVM.BusinessPack {
    import ControlBinding = DotVVM.BusinessPack.Controls.ControlBinding;
    import Bindable = DotVVM.BusinessPack.Controls.Bindable;
    class Utils {
        static zeroWidthSpace: string;
        static nonBreakingSpace: string;
        static readonly isDebugModeEnabled: boolean;
        static warnInDebugMode(text: any): void;
        static installBindingHandler<TBinding extends ControlBinding>(controlName: string, Control: Bindable<TBinding>): void;
        static getExtendedBinding<TBinding extends ControlBinding>($element: JQuery, valueAccessor: () => any, allBindings: KnockoutAllBindingsAccessor): TBinding;
        static bindDragEvents($element: JQuery, onDragenter: (e: JQueryEventObject) => void, onDragleave: () => void): void;
        static isObservableArray(instance: any): instance is KnockoutObservableArray<any>;
        static deepClone<T>(value: KnockoutObservableArray<T>): KnockoutObservableArray<T>;
        static deepClone<T>(value: KnockoutObservable<T>): KnockoutObservable<T>;
        static deepClone<T>(value: T[]): T[];
        static deepClone<T>(value: T): T;
        static deepObservable<TItem>(value: TItem[]): KnockoutObservableArray<TItem>;
        static deepObservable<TValue>(value: TValue): KnockoutObservable<TValue>;
        static clearObservableArray<T>(array: KnockoutObservableArray<T>): void;
        static ensureObservable<T>(value: KnockoutObservableOr<T>): KnockoutObservable<T>;
        static ensureObservableArray<T>(value: KnockoutObservableArrayOr<T>): KnockoutObservableArray<T>;
        static isDataAccessor(bindingFunction: (data: any) => any): boolean;
        static getDataSourceItems(dataSource: KnockoutObservableArray<KnockoutObservable<any>> | KnockoutObservable<any>): KnockoutObservableArray<KnockoutObservable<any>>;
        static concatMany<T>(items: T[][]): T[];
        static pushAll(array: KnockoutObservableArrayOr<any>, itemsToPush: any[]): void;
        static htmlEncode(text: string): string;
        static normalizeSpaces(text: string): string;
        static createGuid(includeHyphens?: boolean): string;
        static convertTouchToMouseEvent(event: JQueryEventObject): JQueryMouseEventObject;
        static closeOnOutsideClick(element: JQuery, closeAction: (element: JQuery, e: JQueryMouseEventObject) => void): void;
        static fixNumberOverflow(value: number, max: number): number;
        static whenAsync(condition: () => boolean): Promise<void>;
    }
}
declare namespace DotVVM.BusinessPack {
    class Clipboard {
        static copy(value: any): boolean;
    }
}
declare namespace DotVVM.BusinessPack {
    class Levenshtein {
        static compare(first: string, second: string): number;
    }
}
declare namespace DotVVM.BusinessPack {
    class RegexUtils {
        static urlOrEmail(flags?: string): RegExp;
        static twoLineBreaks(flags?: string): RegExp;
        static lineBreak(flags?: string): RegExp;
        static hex8Color(flags?: string): RegExp;
        static hex6Color(flags?: string): RegExp;
        static mimeTypeSecondPart(flags?: string): RegExp;
        static wildcardMimeType(flags?: string): RegExp;
        static getLastMatch(pattern: RegExp, text: string, endOffset?: number): RegExpExecArray;
    }
}
declare namespace DotVVM.BusinessPack {
    class ColorUtils {
        static createRgbaColor(red: number, green: number, blue: number, alpha?: number): RgbaColor;
        static createHsvaColor(hue: number, saturation: number, value: number, alpha?: number): HsvaColor;
        static areRgbaColorsEqual(colorA: RgbaColor, colorB: RgbaColor): boolean;
        static rgbaToCssColor(color: RgbaColor): string;
        static updateHueOfRgba(color: RgbaColor, hue: number): RgbaColor;
        static updateChannelOfRgba(color: RgbaColor, channel: RgbaChannel, value: number): RgbaColor;
        static rgbaToHsvaColor(color: RgbaColor): HsvaColor;
        static hueToCssColor(hue: number, alpha?: number): string;
        static hueToRgbaColor(hue: number, alpha?: number): RgbaColor;
        static hsvaToRgbaColor(color: HsvaColor): RgbaColor;
        static rgbaToHexColor(color: RgbaColor): string;
        static parseHexColor(value: string, allowAlphaChannel?: boolean): RgbaColor;
        static tryParseHexColor(value: string, allowAlphaChannel?: boolean): [boolean, RgbaColor];
    }
}
declare namespace DotVVM.BusinessPack {
    class FileUtils {
        static filesToArray(files: FileList): File[];
        static getFileName(filePath: string): string;
        static getExtension(fileName: string): string;
        static formatSize(bytes: number): string;
        static isImageFile(file: File): boolean;
        static getFiles(dataTransfer: DataTransfer): JQueryPromise<File[]>;
        static hasEntries(dataTransfer: DataTransfer): boolean;
        static getEntry(item: DataTransferItem): any;
    }
}
declare namespace DotVVM.BusinessPack {
    class DomUtils {
        static inlineSelector: string;
        static emptySelector: string;
        static blockSelector: string;
        static getNode($node: JQuery | Node): Node;
        static isElement(node: Node): node is Element;
        static isText(node: Node): node is Text;
        static isWhitespace(node: Node): boolean;
        static splitText(node: Text, ...offsets: number[]): Text[];
        static isInAnchor($node: JQuery | Node): boolean;
        static isLast($node: JQuery | Node): boolean;
        static isLastOrFalsy($node: JQuery | Node): boolean;
        static isEmpty($node: JQuery | Node): any;
        static isInlineContent($node: JQuery | Node): boolean;
        static getInlineContents($node: JQuery): JQuery;
        static getWithNextInlineContents($node: JQuery): JQuery;
        static getNextInlineContents($node: JQuery): JQuery;
        static getNextAllInlineContents($node: JQuery): JQuery;
        static getWithNextContents($node: JQuery): JQuery;
        static getNextNode(node: Node): Node;
        static getNextText(node: Node): Text;
        static getNextContents($node: JQuery): JQuery;
        static removeEmptyText($node: JQuery): void;
        static hasOnlyOneRow($table: JQuery): boolean;
        static hasOnlyOneColumn($table: JQuery): boolean;
        static reverse($nodes: JQuery): JQuery;
        static clone($nodes: JQuery, deep?: boolean): JQuery;
        static cloneAs($nodes: JQuery, tagName: string, deep?: boolean): JQuery;
        static getPath($ancestor: JQuery, $node: JQuery): number[];
        static fromPath($ancestor: JQuery, path: number[]): JQuery;
        static closestUntil(node: Node | JQuery, selector: string, filter: string): any;
        static closestUntil(node: Node | JQuery, selector: Element, filter: string): any;
        static closestUntil(node: Node | JQuery, selector: JQuery, filter: string): any;
        static canMerge($node1: JQuery | Node, $node2: JQuery | Node): boolean;
        static getOffset(node: Node): number;
        static trim($parent: JQuery): JQuery;
        static createTreeWalker(node: Node, whatToShow?: number, filter?: (node: Node) => boolean): TreeWalker;
    }
}
declare namespace DotVVM.BusinessPack {
    class FocusManager {
        static autoFocus($root?: JQuery): void;
    }
}
declare namespace DotVVM.BusinessPack {
    enum DayOfWeek {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6
    }
    class DateUtils {
        static addDays(date: Date, value: number): Date;
        static addHours(date: Date, value: number): Date;
        static addMiliseconds(date: Date, value: number): Date;
        static addMinutes(date: Date, value: number): Date;
        static addMonths(date: Date, value: number): Date;
        static addSeconds(date: Date, value: number): Date;
        static addYears(date: Date, value: number): Date;
        static getStartOfDay(date: Date): Date;
        static getEndOfDay(date: Date): Date;
        static getMonthDates(year: number, month: number): Date[];
        static getDaysInMonth(year: number, month: number): number;
        static getMonthWeeks(year: number, month: number, firstDayOfWeek?: DayOfWeek): Date[][];
        static getWeekNumber(date: Date, firstDayOfWeek?: DayOfWeek): number;
        static isLeapMonth(year: number, month: number): boolean;
        static unwrapDate(date: KnockoutObservableOr<Date | string>): Date;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class PrimitiveBase {
        $element: JQuery;
        protected $window: JQuery;
        protected $document: JQuery;
        constructor($element: JQuery);
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class PopupPanel extends PrimitiveBase {
        protected hasExplicitWidth: boolean;
        protected $parent: JQuery;
        protected updateInterval: number;
        protected scrollHandler: (e: UIEvent) => void;
        constructor($element: JQuery, hasExplicitWidth?: boolean);
        readonly isOpened: boolean;
        toggle(open?: boolean): void;
        open(): any;
        open(handler: () => void): any;
        close(): any;
        close(handler: () => void): any;
        update(): void;
        protected onScroll(e: UIEvent): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class Movable extends PrimitiveBase {
        protected restrictToParent: boolean;
        protected $parent: JQuery;
        protected initialX: number;
        protected initialY: number;
        protected onDocumentMousemoveHandler: () => void;
        protected onDocumentMouseupHandler: () => void;
        protected hasUpdated: boolean;
        constructor($element: JQuery, restrictToParent?: boolean);
        update(): any;
        update(handler: () => void): any;
        change(): any;
        change(handler: () => void): any;
        protected onElementMousedown(e: JQueryEventObject): void;
        protected onDocumentMousemove(e: JQueryEventObject): void;
        protected onDocumentMouseup(e: JQueryEventObject): void;
        protected calculatePageX(e: JQueryEventObject): number;
        protected calculatePageY(e: JQueryEventObject): number;
        protected calculateLeft(pageX: number): number;
        protected calculateTop(pageY: number): number;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class SelectionBox extends PrimitiveBase {
        isActive: boolean;
        protected options: SelectionBoxOptions;
        protected $parent: JQuery;
        protected $trigger: JQuery;
        protected onDocumentMousemoveHandler: () => void;
        protected onDocumentMouseupHandler: () => void;
        protected initialX: number;
        protected initialY: number;
        protected lockX: boolean;
        protected lockY: boolean;
        protected hasUpdated: boolean;
        constructor($element: JQuery, options?: SelectionBoxOptions);
        update(): any;
        update(handler: () => void): any;
        change(): any;
        change(handler: () => void): any;
        reset(): void;
        getSelectedItems(): Element[];
        protected getDefaultOptions(): SelectionBoxOptions;
        protected onTriggerMousedown(e: JQueryEventObject): void;
        protected onDocumentMousemove(e: JQueryEventObject): void;
        protected onDocumentMouseup(e: JQueryEventObject): void;
        protected shouldStartSelection(e: JQueryEventObject): boolean;
        protected calculatePageX(e: JQueryEventObject): number;
        protected calculatePageY(e: JQueryEventObject): number;
        protected calculateLeft(pageX: number, pageY: number, width: number): number;
        protected calculateTop(pageX: number, pageY: number, height: number): number;
        protected doesItemCollide($item: JQuery): boolean;
        protected refreshContents(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class ObservableWatcher {
        private observable;
        private runCallback;
        private subscription;
        private watchers;
        private constructor();
        static watch<T>(observable: KnockoutObservable<T>, callback: (newValue: T) => void): ObservableWatcher;
        private onArrayChange;
        private watchArray;
        private onObjectChange;
        private watchObject;
        private findWatcher;
        dispose(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class ReactiveBase {
        protected $window: JQuery;
        protected $document: JQuery;
        protected eventNs: string;
        private events;
        on(event: string, handler: (...args: any[]) => void): this;
        off(event?: string, handler?: (...args: any[]) => void): void;
        trigger(events: string, ...args: any[]): void;
        disposing(handler: () => void): this;
        dispose(): void;
        protected subscribe<T>(value: KnockoutObservableOr<T>, callback: (newValue: T, isInitial?: boolean) => void): void;
        protected watch<T>(value: KnockoutObservableOr<T>, callback: (newValue: T, isInitial?: boolean) => void): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class ControlBase<TBinding extends ControlBinding> extends ReactiveBase {
        protected $element: JQuery;
        protected binding: TBinding;
        protected allBindings: KnockoutAllBindingsAccessor;
        protected bindingContext: KnockoutBindingContext;
        private _templateIds;
        private originalStyleHeight;
        readonly isEnabled: boolean;
        readonly bindingProvider: KnockoutBindingProvider;
        constructor($element: JQuery, binding: TBinding, allBindings: KnockoutAllBindingsAccessor, bindingContext: KnockoutBindingContext);
        initialize(): void;
        show(disableAnimation?: boolean, complete?: () => void): void;
        hide(disableAnimation?: boolean, complete?: () => void): void;
        toggle(show: boolean, disableAnimation?: boolean, complete?: () => void): void;
        private getAnimationDuration;
        private getTimeInMiliseconds;
        private getInlineStyleHeight;
        outside(event: string, handler: (eventObject: JQueryEventObject) => any): void;
        updateTemplate(templateName: string, update: ($contents: JQuery) => void): void;
        getTemplateId(templateName: string): KnockoutObservable<string>;
        protected onVisibleChange(value: boolean, isInitial: boolean): void;
        protected onEnabledChange(): void;
        protected toggleTabIndex(): void;
        protected isOutsideOfTree(element: JQuery | Element): boolean;
        protected postback<TResult>(handler: () => TResult): TResult;
        protected emptyPostback(): void;
    }
}
declare module DotVVM.BusinessPack.Controls {
    import FilterBase = DotVVM.BusinessPack.Filters.FilterBase;
    import FilterCondition = DotVVM.BusinessPack.Filters.FilterCondition;
    import FilterGroup = DotVVM.BusinessPack.Filters.FilterGroup;
    class FilterControlBase<TBinding extends ControlBinding> extends ControlBase<TBinding> {
        protected isFilterCondition(filter: FilterBase): filter is FilterCondition;
        protected isFilterCondition(filter: KnockoutObservable<FilterBase>): filter is KnockoutObservable<FilterCondition>;
        protected isFilterGroup(filter: FilterBase): filter is FilterGroup;
        protected isFilterGroup(filter: KnockoutObservable<FilterBase>): filter is KnockoutObservable<FilterGroup>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class EditorBase<TBinding extends EditorBinding> extends ControlBase<TBinding> {
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class ItemsControlBase<TBinding extends ItemsControlBinding> extends ControlBase<TBinding> {
        readonly items: KnockoutObservableArray<KnockoutObservable<any>>;
        getItemKey(item: any): any;
        findItemByKey(key: any): KnockoutObservable<any>;
        getItemValueCopy(item: any): any;
        getItemValue(item: any): any;
        isValueOfItem(value: any, item: any): boolean;
        findItemByValue(value: any): KnockoutObservable<any>;
        getItemText(item: any): string;
        createItemFromText(text: string): any;
        findItemByText(text: string): KnockoutObservable<any>;
        findItemInDataSourceOrAdd(item: any): KnockoutObservable<any>;
        findItem(predicate: (item: KnockoutObservable<any>) => boolean): KnockoutObservable<any>;
        removeAllItemsExcept(itemsKeys: any[]): void;
        warnThatKeyWasNotFound(key: any): void;
        warnThatValueWasNotFound(value: any): void;
        getAllItems(): KnockoutObservable<any>[];
        protected getItemKeyBinding(): (item: any) => KnockoutObservableOr<any>;
        protected getItemValueBinding(): (item: any) => KnockoutObservableOr<any>;
        protected getItemTextBinding(): (item: any) => KnockoutObservableOr<string>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class HierarchyItemsControlBase<TBinding extends HierarchyItemsControlBinding> extends ItemsControlBase<TBinding> {
        private allItems;
        initialize(): void;
        isRootItem(item: any): boolean;
        hasChildren(item: any): boolean;
        getChildren(item: any): KnockoutObservable<any>[];
        getParent(item: any): KnockoutObservable<any>;
        getAllItems(): KnockoutObservable<any>[];
        protected onDataSourceChange(): void;
        protected getItemsRecursively(parent: KnockoutObservable<any>, items: KnockoutObservable<any>[]): any[];
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class CheckableControlListBase<TBinding extends CheckableControlListBinding> extends ItemsControlBase<TBinding> {
        abstract isSelected(item: any): boolean;
        canBeChecked(item: any): boolean;
        protected getItemKeyBinding(): (item: any) => any;
        protected getItemValueBinding(): (item: any) => any;
        protected getItemStyle(item: any): {
            [key: string]: boolean;
        };
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class ItemsEditorBase<TBinding extends ItemsEditorBinding> extends ItemsControlBase<TBinding> {
        searchResults: KnockoutObservableArray<KnockoutObservable<any>>;
        selectedValues: KnockoutObservableArray<KnockoutObservable<any>>;
        protected searchEngine: SearchEngine;
        initialize(): void;
        hasBeenFound(item: any): boolean;
        protected search(query: string): void;
        protected onDataSourceChange(): void;
        protected createSearchEngine(): SearchEngine;
        protected getItemKeyBinding(): (item: any) => KnockoutObservableOr<string>;
        protected getItemValueBinding(): (item: any) => KnockoutObservableOr<string>;
        protected getItemTextBinding(): (item: any) => KnockoutObservableOr<string>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class SelectorBase<TBinding extends SelectorBinding> extends ItemsEditorBase<TBinding> {
        isItemEnabled(item: any): boolean;
        protected search(query: string): void;
        protected onDataSourceChange(): void;
        protected getItemKeyBinding(): (item: any) => any;
        protected getItemValueBinding(): (item: any) => any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class ButtonBase<TBinding extends ControlBinding> extends ControlBase<TBinding> {
        initialize(): void;
        protected onElementFocusin(e: JQueryEventObject): void;
        protected onElementFocusout(e: JQueryEventObject): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class UndoManager<TStep> extends ReactiveBase {
        private stack;
        private stackOffset;
        readonly isEmpty: boolean;
        readonly canRedo: boolean;
        readonly canUndo: boolean;
        apply(handler: (step: TStep) => void): void;
        record(step: TStep): void;
        rewind(): void;
        redo(): void;
        undo(): void;
        reset(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class SearchEngine {
        private options;
        private timeout;
        private items;
        private cache;
        constructor(options?: SearchEngineOptions);
        readonly isRunning: boolean;
        search(query: string): Promise<any[]>;
        preload(items: KnockoutObservable<any>[], clearCache?: boolean): void;
        cancel(): void;
        clear(): void;
        private getFromCache;
        private pushToCache;
        private match;
        private sort;
        private union;
    }
}
declare namespace DotVVM.BusinessPack {
    class DeviceUtils {
        static readonly isMobileOrTablet: boolean;
        static addMobileOrTabletProp($element: JQuery, prop: string, value: string | number | boolean): void;
    }
}
declare namespace DotVVM.BusinessPack {
    interface HsvaColor {
        Hue: KnockoutObservable<number>;
        Saturation: KnockoutObservable<number>;
        Value: KnockoutObservable<number>;
        Alpha: KnockoutObservable<number>;
    }
}
declare namespace DotVVM.BusinessPack {
    interface RgbaColor {
        Red: KnockoutObservable<number>;
        Green: KnockoutObservable<number>;
        Blue: KnockoutObservable<number>;
        Alpha: KnockoutObservable<number>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface Bindable<TBinding extends ControlBinding> {
        new ($element: JQuery, binding: TBinding, allBindings: KnockoutAllBindingsAccessor, bindingContext: KnockoutBindingContext): ControlBase<TBinding>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface CheckableControlListBinding extends ItemsControlBinding {
        itemKeyBinding(item: any): KnockoutObservableOr<any>;
        itemValueBinding(item: any): KnockoutObservableOr<any>;
        itemEnabledBinding(item: any): KnockoutObservableOr<boolean>;
        changed(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ControlBinding {
        visible: KnockoutObservableOr<boolean>;
        enabled: KnockoutObservableOr<boolean>;
        tabIndex: number;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface EditorBinding extends ControlBinding {
        changed(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface HierarchyItemsControlBinding extends ItemsControlBinding {
        itemChildrenBinding(item: any): KnockoutObservableArray<KnockoutObservable<any>>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ItemsControlBinding extends ControlBinding {
        dataSource: KnockoutObservableArray<KnockoutObservable<any>> | KnockoutObservable<any>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ItemsEditorBinding extends ItemsControlBinding {
        itemTextBinding(item: any): KnockoutObservableOr<string>;
        loadItemsMode: KnockoutObservableOr<"Merge" | "Replace">;
        loadItems(text: string): Promise<DotvvmAfterPostBackEventArgs>;
        changed(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface SearchEngineOptions {
        getItemKey?: (item: any) => any;
        getItemText?: (item: any) => string;
        loadItems?: (query: string) => Promise<DotvvmAfterPostBackEventArgs>;
        discardLocalItemsBeforeSearch?: boolean;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface SelectorBinding extends ItemsEditorBinding {
        itemKeyBinding(item: any): KnockoutObservableOr<any>;
        itemValueBinding(item: any): KnockoutObservableOr<any>;
        itemEnabledBinding(item: any): KnockoutObservableOr<boolean>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class Alert extends ControlBase<AlertBinding> {
        protected $dismissButton: JQuery;
        protected alertTypes: string[];
        protected autoHideTimer: number;
        protected isDisplayed: boolean;
        protected readonly autoHideTimeoutMs: number;
        protected readonly iconTypeSource: KnockoutObservableOr<string>;
        initialize(): void;
        show(disableAnimation?: boolean, complete?: () => void): void;
        hide(disableAnimation?: boolean, complete?: () => void): void;
        protected startTimer(): void;
        protected stopTimer(): void;
        protected onDismissButtonClick(e: JQueryEventObject): void;
        protected onVisibleChange(value: boolean, isInitial: boolean): void;
        protected onTypeChange(type: string): void;
        protected onIsDisplayedChange(value: boolean, isInitial: boolean): void;
        protected onTextChange(text: string, isInitial: boolean): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface AlertBinding extends ControlBinding {
        type: KnockoutObservableOr<string>;
        isDisplayed: KnockoutObservableOr<boolean>;
        text: KnockoutObservableOr<string>;
        autoHideTimeout: KnockoutObservableOr<number>;
        dismissed(): any;
        showOnTextChange: boolean;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class AutoComplete extends ItemsEditorBase<AutoCompleteBinding> {
        protected $textBox: JQuery;
        protected $popup: JQuery;
        protected $resultsView: JQuery;
        protected popupPanel: PopupPanel;
        protected shouldPostbackOnChange: boolean;
        readonly isOpened: boolean;
        readonly hasValue: number;
        protected readonly resultsView: ListView;
        initialize(): void;
        togglePopup(open?: boolean): void;
        updatePropertyFromText(): void;
        selectFocusedItem(): void;
        selectFocusedItemOrFirstResult(): void;
        protected onElementKeydown(e: JQueryEventObject): void;
        protected onTextBoxFocus(): void;
        protected onTextBoxBlur(): void;
        protected onTextBoxKeydown(e: JQueryEventObject): void;
        protected onTextBoxInput(e: JQueryEventObject): void;
        protected onTextBoxChange(e: JQueryEventObject): void;
        protected onDataSourceChange(): void;
        protected onSearchResultsChange(items: any[]): void;
        protected onSearchResultSelected(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface AutoCompleteBinding extends ItemsEditorBinding {
        text: KnockoutObservableOr<string>;
        updateTextOnInput: KnockoutObservableOr<boolean>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class Button extends ButtonBase<ButtonBinding> {
        protected buttonTypes: string[];
        initialize(): void;
        protected onElementClick(e: JQueryEventObject): void;
        protected onTypeChange(type: string): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ButtonBinding extends ControlBinding {
        type: KnockoutObservableOr<string>;
        click(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface CalendarYear {
        FirstDate: KnockoutObservable<Date>;
        LastDate: KnockoutObservable<Date>;
        IsLeapYear: KnockoutObservable<boolean>;
        IsOtherDecade: KnockoutObservable<boolean>;
        IsToday: KnockoutObservable<boolean>;
        Items: KnockoutObservableArray<KnockoutObservable<any>>;
    }
    interface CalendarMonth {
        FirstDate: KnockoutObservable<Date>;
        LastDate: KnockoutObservable<Date>;
        IsLeapMonth: KnockoutObservable<boolean>;
        IsToday: KnockoutObservable<boolean>;
        Items: KnockoutObservableArray<KnockoutObservable<any>>;
    }
    interface CalendarWeek {
        Number: KnockoutObservable<number>;
        Days: KnockoutObservableArray<KnockoutObservable<CalendarDay>>;
    }
    interface CalendarDay {
        Date: KnockoutObservable<Date>;
        IsOtherMonth: KnockoutObservable<boolean>;
        IsToday: KnockoutObservable<boolean>;
        Items: KnockoutObservableArray<KnockoutObservable<any>>;
    }
    type CalendarView = "Decade" | "Year" | "Month";
    interface DateTimeRestriction {
        Type: KnockoutObservable<string>;
    }
    interface DateRestriction extends DateTimeRestriction {
    }
    interface TimeRestriction extends DateTimeRestriction {
    }
    interface DateRangeRestriction extends DateRestriction {
        StartDate: KnockoutObservable<Date | string>;
        EndDate: KnockoutObservable<Date | string>;
    }
    interface DayOfWeekRestriction extends DateRestriction {
        DayOfWeek: KnockoutObservable<string>;
    }
    interface TimeRangeRestriction extends TimeRestriction {
        StartTime: KnockoutObservable<Date | string>;
        EndTime: KnockoutObservable<Date | string>;
    }
    interface CalendarBinding extends ControlBinding {
        activeDate: KnockoutObservable<Date | string>;
        dataSource: KnockoutObservableArray<KnockoutObservable<any>>;
        itemDateBinding(item: any): KnockoutObservable<Date | string>;
        view: KnockoutObservableOr<CalendarView>;
        firstDayOfWeek: string;
    }
    class Calendar extends ControlBase<CalendarBinding> {
        protected $decadeView: JQuery;
        protected $yearView: JQuery;
        protected $monthView: JQuery;
        protected yearSource: KnockoutObservable<KnockoutObservable<CalendarYear>[]>;
        protected monthSource: KnockoutObservable<KnockoutObservable<CalendarMonth>[]>;
        protected weekSource: KnockoutObservable<KnockoutObservable<CalendarWeek>[]>;
        protected titleSource: KnockoutComputed<string>;
        protected today: Date;
        initialize(): void;
        activeDate: Date;
        readonly $activeView: JQuery;
        readonly firstDayOfWeek: DayOfWeek;
        readonly isDecadeViewActive: boolean;
        readonly isYearViewActive: boolean;
        readonly isMonthViewActive: boolean;
        readonly decadeStart: Date;
        readonly decadeEnd: Date;
        static isDateRangeRestriction(restriction: DateTimeRestriction): restriction is DateRangeRestriction;
        static isDayOfWeekRestriction(restriction: DateTimeRestriction): restriction is DayOfWeekRestriction;
        static isTimeRangeRestriction(restriction: DateTimeRestriction): restriction is TimeRangeRestriction;
        static isDateWeekend(date: Date): boolean;
        protected findYearItems(year: number): KnockoutObservable<any>[];
        protected findMonthItems(year: number, month: number): KnockoutObservable<any>[];
        protected findDayItems(date: Date): KnockoutObservable<any>[];
        protected findItems(predicate: (date: Date) => boolean): KnockoutObservable<any>[];
        private getYearSource;
        private getMonthSource;
        private getWeekSource;
        private getTitleSource;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface CarouselItem {
        IsActive: KnockoutObservable<boolean>;
        ImageSrc: KnockoutObservable<string> | string;
    }
    interface CarouselBinding extends ControlBinding {
        items: KnockoutObservableArray<KnockoutObservable<CarouselItem>>;
    }
    class Carousel extends ControlBase<CarouselBinding> {
        activeItemIndex: KnockoutObservable<number>;
        activeItem: KnockoutObservable<CarouselItem>;
        initialize(): void;
        getActiveItem(): KnockoutObservable<CarouselItem>;
        onItemsChange(): void;
        onActiveItemIndexChange(newActiveItemIndexValue: number): void;
        onTimerTick(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class CheckBoxList extends CheckableControlListBase<CheckBoxListBinding> {
        protected selectedItemsKeys: KnockoutObservableArray<any>;
        initialize(): void;
        toggleItem(item: any): void;
        selectItem(item: any): void;
        unselectItem(item: any): void;
        isSelected(item: any): boolean;
        protected onInputChange(e: JQueryEventObject): void;
        protected onSelectedValuesChange(values: any[]): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface CheckBoxListBinding extends CheckableControlListBinding {
        itemCheckedBinding(item: any): KnockoutObservableOr<boolean>;
        selectedValues: KnockoutObservableArray<KnockoutObservable<any>>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class CheckableControl extends ControlBase<CheckableControlBinding> {
        protected $input: JQuery;
        protected $svg: JQuery;
        private checkInterval;
        initialize(): void;
        protected onElementMousedown(e: JQueryEventObject): void;
        protected onInputFocus(): void;
        protected onInputBlur(): void;
        protected onInputClick(e: JQueryEventObject): void;
        protected updateCheckState(): void;
        protected getCheckState(): boolean;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface CheckableControlBinding extends ControlBinding {
        changed(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class ColorPicker<TBinding extends ColorPickerBinding> extends EditorBase<TBinding> {
        protected $value: JQuery;
        protected $colorPreview: JQuery;
        protected $unselectButton: JQuery;
        protected $toggleButton: JQuery;
        protected $popup: JQuery;
        protected $colorSpectrum: JQuery;
        protected $colorGrip: JQuery;
        protected $hueSlider: JQuery;
        protected $hueSliderGrip: JQuery;
        protected $alphaSlider: JQuery;
        protected $alphaSliderGrip: JQuery;
        protected $colorEditorSwitch: JQuery;
        protected $hexColorInput: JQuery;
        protected $redChannelInput: JQuery;
        protected $greenChannelInput: JQuery;
        protected $blueChannelInput: JQuery;
        protected $alphaChannelInput: JQuery;
        protected $predefinedColors: JQuery;
        protected hue: KnockoutObservable<number>;
        protected alpha: KnockoutObservable<number>;
        protected previewColor: KnockoutObservable<RgbaColor>;
        protected isHexEditorActive: KnockoutObservable<boolean>;
        protected popupPanel: PopupPanel;
        protected nullColor: RgbaColor;
        protected isLoadingColor: boolean;
        protected isChangingColor: boolean;
        readonly isOpened: boolean;
        readonly isPreviewingColor: boolean;
        readonly hasValue: boolean;
        protected readonly canUnselectValue: boolean;
        initialize(): void;
        togglePopup(open?: boolean): void;
        selectColor(color: RgbaColor): void;
        isSelected(color: RgbaColor): boolean;
        getSelectedColor(): RgbaColor;
        unselectColor(): void;
        protected onElementFocusin(e: JQueryEventObject): void;
        protected onElementFocusout(e: JQueryEventObject): void;
        protected onValueFocusin(e: JQueryEventObject): void;
        protected onValueFocusout(e: JQueryEventObject): void;
        protected onElementKeydown(e: JQueryEventObject): void;
        protected onValueKeydown(e: JQueryKeyEventObject): void;
        protected onValueKeyup(e: JQueryKeyEventObject): void;
        protected onUnselectButtonClick(e: JQueryEventObject): void;
        protected onToggleButtonClick(e: JQueryEventObject): void;
        protected onPopupMousedown(e: JQueryMouseEventObject): void;
        protected onColorSpectrumMousedown(e: JQueryEventObject): void;
        protected onColorSpectrumMousemove(e: JQueryEventObject): void;
        protected onColorSpectrumMouseup(e: JQueryEventObject): void;
        protected onAlphaHueSliderChange(): void;
        protected onColorEditorSwitchClick(e: JQueryEventObject): void;
        protected onHexColorInputKeydown(e: JQueryEventObject): void;
        protected onHexColorInputChange(e: JQueryEventObject): void;
        protected onChannelInputChange(channel: RgbaChannel, e: JQueryEventObject): void;
        protected onPredefinedColorClick(e: JQueryEventObject): void;
        protected onSelectedColorChange(color: string): void;
        protected onSelectedRgbaColorChange(color: RgbaColor): void;
        protected onPreviewColorChange(color: RgbaColor): void;
        protected onHueChange(hue: number, isInitial: boolean): void;
        protected onAlphaChange(value: number, isInitial: boolean): void;
        protected moveColorGripToPosition(pageX: number, pageY: number): void;
        protected getColorSpectrumGradient(cssColor: string): string;
        protected getAlphaGradient(color: RgbaColor): string;
        protected previewColorFromColorGrip(): void;
        protected setColorGripPosition(color: HsvaColor): void;
        protected setColorEditorValues(color: RgbaColor): void;
        protected getColorButtonCssClasses(value: string): {
            [x: string]: boolean;
        };
        protected getColorButtonCssStyle(value: string): {
            "background-color": string;
        };
        protected selectPreviewColor(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ColorPickerBinding extends EditorBinding {
        selectedColor: KnockoutObservableOr<string>;
        selectedRgbaColor: KnockoutObservable<RgbaColor>;
        allowAlphaChannel: boolean;
        predefinedColors: KnockoutObservableArray<KnockoutObservable<RgbaColor>>;
        allowUnselect: KnockoutObservableOr<boolean>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class ComboBox extends SelectorBase<ComboBoxBinding> {
        protected $textBox: JQuery;
        protected $unselectButton: JQuery;
        protected $toggleButton: JQuery;
        protected $popup: JQuery;
        protected selectedItem: KnockoutObservable<any>;
        protected popupPanel: PopupPanel;
        initialize(): void;
        readonly $resultsView: JQuery;
        protected isRendered: KnockoutObservable<boolean>;
        readonly isOpened: boolean;
        readonly hasValue: boolean;
        protected readonly canUnselectValue: boolean;
        protected readonly resultsView: ListView;
        protected readonly allowNewItems: boolean;
        togglePopup(open?: boolean): void;
        selectFocusedItemOrCurrentText(): void;
        selectCurrentText(): void;
        protected createSearchEngine(): SearchEngine;
        protected onElementKeydown(e: JQueryEventObject): void;
        protected onTextBoxFocus(): void;
        protected onTextBoxBlur(): void;
        protected onTextBoxKeydown(e: JQueryEventObject): void;
        protected onTextBoxInput(e: JQueryKeyEventObject): void;
        protected onUnselectButtonClick(e: JQueryEventObject): void;
        protected onToggleButtonClick(e: JQueryEventObject): void;
        protected autoFocusItem(): void;
        protected onTextChange(text: string): void;
        protected onDataSourceChange(): void;
        protected onSelectedValueChange(value: any): void;
        protected onSearchResultsChange(items: any[]): void;
        protected onSearchResultSelected(): any;
        protected onResultsViewSelectedItemClick(item: any): void;
        protected resetText(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ComboBoxBinding extends SelectorBinding {
        text: KnockoutObservableOr<string>;
        selectedValue: KnockoutObservableOr<any>;
        allowUnselect: KnockoutObservableOr<boolean>;
        allowNewItems: KnockoutObservableOr<boolean>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class CommandShortcut extends ControlBase<CommandShortcutBinding> {
        protected shortcutHits: number;
        initialize(): void;
        protected onDocumentKeydown(e: JQueryEventObject): void;
        protected onDocumentKeyup(e: JQueryEventObject): void;
        protected wasShortcutPressed(e: JQueryEventObject): boolean;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface CommandShortcutBinding extends ControlBinding {
        key: KnockoutObservableOr<number>;
        ctrl: KnockoutObservableOr<boolean>;
        alt: KnockoutObservableOr<boolean>;
        shift: KnockoutObservableOr<boolean>;
        command(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class CopyButton extends ButtonBase<CopyButtonBinding> {
        initialize(): void;
        protected onElementClick(e: JQueryEventObject): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface CopyButtonBinding extends ButtonBinding {
        valueToCopy: KnockoutObservableOr<any>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface DateOrTimePickerBaseBinding extends ControlBinding {
        allowUnselect: KnockoutObservableOr<boolean>;
        isNested: boolean;
        changed(): any;
    }
    abstract class DateOrTimePickerBase<T extends DateOrTimePickerBaseBinding> extends ControlBase<T> {
        hasPendingChange: boolean;
        protected $unselectButton: JQuery;
        protected $toggleButton: JQuery;
        protected $popup: JQuery;
        protected popupPanel: PopupPanel;
        protected $confirmButton: JQuery;
        initialize(): void;
        protected abstract readonly canUnselectDateOrTime: any;
        protected abstract unselectDateOrTime(): any;
        readonly isOpened: boolean;
        readonly hasPopup: number;
        readonly hasFocus: boolean;
        protected onElementFocusin(e: JQueryEventObject): void;
        protected onElementFocusout(e: JQueryEventObject): void;
        protected onUnselectButtonClick(e: JQueryEventObject): void;
        protected onToggleButtonClick(e: JQueryEventObject): void;
        protected onElementKeydown(e: JQueryKeyEventObject): void;
        protected onConfirmButtonClick(e: JQueryEventObject): void;
        protected selectionChanged(): void;
        protected applyChanges(): void;
        protected onTextBoxChange(e: JQueryKeyEventObject): void;
        togglePopup(open?: boolean): void;
        protected onPopupOpen(): void;
        protected onPopupClose(): void;
        protected abstract floorDate(date: Date): number;
        protected isDateTimeLowerThanMin(dateTime: Date, min: KnockoutObservable<string | Date>, floor?: (date: Date) => number): boolean;
        protected isDateTimeHigherThanMax(dateTime: Date, max: KnockoutObservable<string | Date>, floor?: (date: Date) => number): boolean;
        protected isDateTimeRestricted(dateTime: Date, restrictions: DateTimeRestriction[], floor?: (dateTime: Date) => number): boolean;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface DatePickerBaseBinding extends DateOrTimePickerBaseBinding {
        minDate: KnockoutObservable<string | Date>;
        maxDate: KnockoutObservable<string | Date>;
        restrictions: KnockoutObservableArray<KnockoutObservable<DateRestriction>>;
    }
    abstract class DatePickerBase<T extends DatePickerBaseBinding> extends DateOrTimePickerBase<T> {
        initialize(): void;
        protected floorDate(date: Date): number;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface DatePickerBinding extends DatePickerBaseBinding {
        selectedDate: KnockoutObservable<string>;
    }
    class DatePicker extends DatePickerBase<DatePickerBinding> {
        protected $textBox: JQuery;
        protected $header: JQuery;
        protected $switchButton: JQuery;
        protected $prevButton: JQuery;
        protected $nextButton: JQuery;
        protected $calendar: JQuery;
        protected activeDateSource: KnockoutObservable<Date>;
        protected viewSource: KnockoutObservable<CalendarView>;
        protected focusedDateSource: KnockoutObservable<Date>;
        initialize(): void;
        readonly selectedDate: Date;
        readonly minDate: Date;
        readonly maxDate: Date;
        readonly calendar: Calendar;
        readonly restrictions: DateRestriction[];
        protected readonly canUnselectDateOrTime: boolean;
        protected unselectDateOrTime(): void;
        protected onToggleButtonClick(e: JQueryEventObject): void;
        protected onElementKeydown(e: JQueryKeyEventObject): void;
        protected onTextBoxKeydown(e: JQueryKeyEventObject): void;
        protected onSwitchButtonClick(e: JQueryEventObject): void;
        protected onPrevButtonClick(e: JQueryEventObject): void;
        protected onNextButtonClick(e: JQueryEventObject): void;
        protected onYearItemClick(e: JQueryEventObject): void;
        protected onMonthItemClick(e: JQueryEventObject): void;
        protected onDayItemClick(e: JQueryEventObject): void;
        protected onSelectedDateChange(dateStr: string): void;
        selectFocusedItem(): void;
        selectDate(date: Date): void;
        isDateFocused(date: Date): boolean;
        isDateSelected(date: Date): boolean;
        isYearFocused(date: Date): boolean;
        isYearSelected(date: Date): boolean;
        isMonthFocused(date: Date): boolean;
        isMonthSelected(date: Date): boolean;
        focusDate(date: Date): void;
        focusPrevItem(): void;
        focusItemOnPrevPage(): void;
        focusItemAbove(): void;
        focusNextItem(): void;
        focusItemOnNextPage(): void;
        focusItemBelow(): void;
        isDateEnabled(date: Date): boolean;
        isDateRangeEnabled(startDate: Date, endDate: Date, floor: (date: Date) => number): boolean;
        isMonthRangeEnabled(startDate: Date, endDate: Date): boolean;
        isYearRangeEnabled(startDate: Date, endDate: Date): boolean;
        protected isAnyDateInDateRangeEnabled(startDate: Date, endDate: Date): boolean;
        protected toRestrictionsObservable(data: any): any;
        protected findPrevEnabledDate(startFromDate: Date, fallbackToNext: boolean): any;
        protected findNextEnabledDate(startFromDate: Date, fallbackToPrev: boolean): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    module DateHelper {
        function getCulture(): any;
        function getGlobalizeLibrary(): any;
        function convertStringDayOfWeekToNumber(dayOfWeek: string): number;
        function parseDate(date: string): Date;
        function buildFullTimeText(hours: number, minutes: number): string;
        function buildShortTimeText(hours: number, minutes: number): string;
        function buildAmPmString(hours: number, minutes: number): any;
        function getTotalCountOfElapsedMsInDay(date: Date): number;
        function getStartAndEndOfTheDateInMs(date: Date, dateType: DateRangeType): {
            start: number;
            end: number;
        };
        function createCopy(date: Date): Date;
        function areDatesEqual(date1: Date, date2: Date): boolean;
        function isWeekend(date: Date): boolean;
        function isDateInGivenMinute(date: Date, minute: Date): boolean;
        function isDateInDateRangeOfCell(date: Date, cellDate: Date, cellType: DateRangeType): boolean;
        function isDateInGivenHour(date: Date, hour: Date): boolean;
        function isDateInGivenDay(date: Date, day: Date): boolean;
        function isDateInGivenMonth(date: Date, month: Date): boolean;
        function isDateInGivenYear(date: Date, year: Date): boolean;
        function getNextOccuranceOfDayOfWeek(date: Date, dayOfWeek: number): Date;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class CalendarBase<TDateValidator extends IDateValidator> implements ICalendarBase {
        protected dateValidator: TDateValidator;
        private _currentlyDisplayedDate;
        protected currentlyDisplayedDate: Date;
        getCurrentlyDisplayedDate(): Date;
        setCurrentlyDisplayedDate(displayedDate: Date): void;
        protected readonly currentlyDisplayedYear: number;
        protected readonly currentlyDisplayedMonth: number;
        protected readonly currentlyDisplayedDay: number;
        protected readonly currentlyDisplayedHour: number;
        protected readonly currentlyDisplayedMinute: number;
        private _currentViewType;
        protected currentViewType: DateRangeType;
        getCurrentViewType(): DateRangeType;
        setCurrentViewType(viewType: DateRangeType): void;
        enabled: boolean;
        protected culture: any;
        protected globalizeLibrary: any;
        protected $element: JQuery;
        readonly canGoToThePreviousPage: boolean;
        readonly canGoToTheNextPage: boolean;
        protected calendarType: CalendarMode;
        getCalendarType(): CalendarMode;
        setCalendarType(type: CalendarMode): void;
        protected observers: ICalendarObserver[];
        constructor(dateValidator: TDateValidator, calendarType: CalendarMode);
        subscribe(observer: ICalendarObserver): void;
        unsubscribe(observer: ICalendarObserver): void;
        protected notifyObservers(changeType?: ChangeType, ...args: any[]): void;
        abstract checkSelectedValue(): any;
        protected abstract selectMinute(date: Date): void;
        protected abstract selectHour(date: Date): void;
        protected abstract selectDay(date: Date): void;
        protected abstract selectMonth(date: Date): void;
        protected abstract selectYear(date: Date): any;
        render(parentElement: Element, displayedDate?: Date, viewType?: DateRangeType): void;
        protected initCalendarControls(): void;
        update(): void;
        protected getFirstPossibleDateToShow(dateToDisplay: Date): Date;
        protected createCalendar(): void;
        protected updateCalendarTable(table: JQuery): void;
        protected initMinuteSelector(): void;
        protected initHourSelector(): void;
        protected initDateSelector(): void;
        protected initMonthSelector(): void;
        protected initYearSelector(): void;
        protected calendarRendered(): void;
        protected createYearCell(date: Date, isActive?: boolean): any;
        protected createMonthCell(date: Date, isActive?: boolean): any;
        protected createDateCell(date: Date, isActive?: boolean): any;
        protected changeMinutesPage(hourStep: number): void;
        protected changeHoursPage(dayStep: number): void;
        protected changeDatesPage(monthStep: number): void;
        protected changeMonthsPage(yearStep: number): void;
        protected changeYearsPage(step: number): void;
        protected changePage(step: number): void;
        protected createHourCell(date: Date, isActive?: boolean): any;
        protected createMinuteCell(date: Date, isActive?: boolean): JQuery;
        protected createCell(text: string): JQuery;
        protected createHeaderCell(text: string): JQuery;
        protected createLinkCell(text: string, clickAction: () => void, isActive?: boolean, isDisabled?: boolean, isPartiallyDisabled?: boolean, isHeader?: boolean): any;
        private createPrevLinkCell;
        private createNextLinkCell;
        private createLink;
        private createEmptyLink;
        private createRow;
        private createTable;
        private createTableThead;
        private createTableTbody;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class CalendarN<TDateValidator extends IDateValidator> extends CalendarBase<TDateValidator> implements ICalendar {
        private _selectedDate;
        protected selectedDate: Date;
        getSelectedDate(): Date;
        setSelectedDate(date: Date): any;
        checkSelectedValue(): void;
        protected moveDateToValidRangeIfNessesary(date: Date): any;
        protected getFirstPossibleDateToShow(dateToDisplay: Date): Date;
        protected createCalendar(): void;
        createYearCell(date: Date): any;
        createMonthCell(date: Date): any;
        createDateCell(date: Date): any;
        createHourCell(date: Date): any;
        createMinuteCell(date: Date): JQuery;
        selectMinute(date: Date): void;
        selectHour(date: Date): void;
        selectMonth(date: Date): void;
        selectYear(date: Date): void;
        selectDay(date: Date): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class CalendarExtendedModeBase<TCalendar extends ICalendarBase, TDateValidator extends IDateValidator> implements ICalendarBase, ICalendarObserver {
        abstract notify(changeType: ChangeType): any;
        protected dateValidator: TDateValidator;
        abstract currentlyDisplayedDate: Date;
        abstract updateSidePanel(): any;
        getCurrentlyDisplayedDate(): Date;
        setCurrentlyDisplayedDate(displayedDate: Date): void;
        abstract getCurrentViewType(): any;
        abstract setCurrentViewType(viewType: DateRangeType): any;
        enabled: boolean;
        protected culture: any;
        protected globalizeLibrary: any;
        protected $element: JQuery;
        protected $main: JQuery;
        protected $side: JQuery;
        protected mainCalendar: TCalendar;
        protected sideCalendar: CalendarN<TDateValidator>;
        getCalendarType(): CalendarMode;
        protected observers: ICalendarObserver[];
        constructor(dateValidator: TDateValidator);
        subscribe(observer: ICalendarObserver): void;
        unsubscribe(observer: ICalendarObserver): void;
        protected notifyObservers(changeType?: ChangeType): void;
        checkSelectedValue(): void;
        abstract render(parentElement: Element, displayedDate?: Date, viewType?: DateRangeType): any;
        update(): void;
        protected createButton(text: string, clickAction: () => void, isActive?: boolean, isDisabled?: boolean): JQuery;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class CalendarExtended<TDateValidator extends IDateValidator> extends CalendarExtendedModeBase<CalendarN<TDateValidator>, TDateValidator> implements ICalendar {
        $sideCalendar: JQuery;
        $sideUpperRow: JQuery;
        setSelectedDate(value: Date): void;
        getSelectedDate(): Date;
        constructor(dateValidator: TDateValidator);
        notify(changeType: ChangeType, ...args: Array<Date>): void;
        getCurrentViewType(): DateRangeType;
        setCurrentViewType(viewType: DateRangeType): void;
        getCalendarType(): CalendarMode;
        render(parentElement: Element, displayedDate?: Date, viewType?: DateRangeType): void;
        updateSidePanel(): void;
        currentlyDisplayedDate: Date;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ICalendarBase {
        getCurrentlyDisplayedDate(): any;
        setCurrentlyDisplayedDate(displayedDate: Date): any;
        getCurrentViewType(): any;
        getCalendarType(): any;
        setCurrentViewType(viewType: DateRangeType): any;
        subscribe(observer: ICalendarObserver): any;
        unsubscribe(observer: ICalendarObserver): any;
        render(parentElement: Element, displayedDate?: Date, viewType?: DateRangeType): any;
        update(): any;
        checkSelectedValue(): any;
        enabled: any;
    }
    interface ICalendar extends ICalendarBase {
        setSelectedDate(value: Date): any;
        getSelectedDate(): any;
    }
    interface IRangeCalendar extends ICalendarBase {
        setSelectedRange(start: Date, end: Date): any;
        setSelectedStartDate(date: Date): any;
        setSelectedEndDate(date: Date): any;
        getSelectedStartDate(): any;
        getSelectedEndDate(): any;
        setDisplayedDateToStartDate(): any;
        setDisplayedDateToEndDate(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ICalendarObserver {
        notify(changeType: ChangeType, ...args: any[]): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class RangeCalendarExtended<TDateRangeValidator extends IDateRangeValidator> extends CalendarExtendedModeBase<RangeSelection<TDateRangeValidator>, TDateRangeValidator> implements IRangeCalendar {
        $sideCalendar: JQuery;
        $sideCalendarSelector: JQuery;
        protected isSideCalendarInStartMode: boolean;
        protected isSideCalendarInEndMode: boolean;
        constructor(dateValidator: TDateRangeValidator);
        notify(changeType: ChangeType, ...args: Array<Date>): void;
        updateSidePanel(): void;
        getCurrentViewType(): DateRangeType;
        setCurrentViewType(viewType: DateRangeType): void;
        render(parentElement: Element, displayedDate?: Date, viewType?: DateRangeType): void;
        setSelectedRange(start: Date, end: Date): void;
        setSelectedStartDate(date: Date): void;
        setSelectedEndDate(date: Date): void;
        getSelectedStartDate(): Date;
        getSelectedEndDate(): Date;
        setDisplayedDateToStartDate(): void;
        setDisplayedDateToEndDate(): void;
        currentlyDisplayedDate: Date;
        buildSideCalendarSelector(tryToUseFullDate?: boolean): void;
        putSideCalendarInStartMode(): void;
        putSideCalendarInEndMode(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class RangeSelection<TRangeValidator extends IDateRangeValidator> extends CalendarBase<TRangeValidator> implements IRangeCalendar {
        private _selectedStartDate;
        private _selectedEndDate;
        protected selectedStartDate: Date;
        protected selectedEndDate: Date;
        setSelectedRange(start: Date, end: Date): void;
        setSelectedStartDate(date: Date): void;
        setSelectedEndDate(date: Date): void;
        getSelectedStartDate(): Date;
        getSelectedEndDate(): Date;
        private changeRangeToBeValidIfNessesary;
        protected getFirstPossibleDateToShow(dateToDisplay: Date): Date;
        protected isAnyItemInCurrentRangeDisabledOrPartiallyDisabled(): boolean;
        protected createCalendar(): void;
        checkSelectedValue(): void;
        setDisplayedDateToStartDate(): void;
        setDisplayedDateToEndDate(): void;
        selectMinute(date: Date): void;
        selectHour(date: Date): void;
        selectMonth(date: Date): void;
        selectYear(date: Date): void;
        selectDay(date: Date): void;
        private selectStartOrEndDate;
        protected createYearCell(date: Date): any;
        protected createMonthCell(date: Date): any;
        protected createDateCell(date: Date): any;
        protected createHourCell(date: Date): any;
        protected createMinuteCell(date: Date): JQuery;
        private addCssClasses;
        protected calendarRendered(): void;
        private changeClasesOnHover;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class CalendarControlBase<TBinding extends ICalendarBaseBinding, TCalendar extends ICalendarBase> extends ControlBase<TBinding> implements ICalendarObserver {
        abstract notify(changeType: ChangeType): any;
        abstract initializeCalendar(): any;
        readonly displayMode: any;
        element: any;
        getElement(): any;
        protected calendar: TCalendar;
        initialize(): void;
        protected onEnabledChange(): void;
        getViewType(): CalendarMode;
        setMinAndMaxDate(): void;
        protected fireChangedEvent(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ICalendarBaseBinding extends ControlBinding {
        minDate: KnockoutObservableOr<string>;
        maxDate: KnockoutObservableOr<string>;
        selectionCompleted(): any;
        restrictions: KnockoutObservableArray<KnockoutObservable<DateTimeRestriction>>;
        displayMode: KnockoutObservableOr<string>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface IRangeSelectionBinding {
        selectedStartDate: KnockoutObservableOr<string>;
        selectedEndDate: KnockoutObservableOr<string>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ISingleDateBinding {
        selectedDate: KnockoutObservableOr<string>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ICalendarControlBinding extends ICalendarBaseBinding, ISingleDateBinding {
    }
    class CalendarControl extends CalendarControlBase<ICalendarControlBinding, ICalendar> {
        private selectedDate;
        private readonly selectedYear;
        private readonly selectedMonth;
        private readonly selectedDay;
        private readonly selectedHour;
        private readonly selectedMinute;
        initialize(): void;
        initializeCalendar(): void;
        notify(): void;
        updateSelectedDateInCalendar(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface IRangeCalendarControlBinding extends ICalendarBaseBinding, IRangeSelectionBinding {
    }
    class RangeCalendarControl extends CalendarControlBase<IRangeCalendarControlBinding, IRangeCalendar> {
        private selectedStartDate;
        private selectedEndDate;
        notify(changeType: ChangeType): void;
        initializeCalendar(): void;
        private lastActiveInput;
        private updateAllreadySchedulled;
        updateSelectedDatesInCalendar(): void;
        initialize(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class CalendarPopup<TBinding extends ICalendarPopupBinding, TCalendar extends ICalendarBase> extends CalendarControlBase<TBinding, TCalendar> {
        protected typingTimer: any;
        protected doneTypingInterval: number;
        abstract updateDateFromTextbox(): any;
        protected scrollHandler: (e: UIEvent) => void;
        protected popupElement: JQuery;
        static activePopup: any;
        protected inputPart: JQuery;
        static poopupUpdateHandle: any;
        destroy(): void;
        static destroyActivePopup(): void;
        static destroyActivePopupOnEsc(e: any): void;
        updateInternal: any;
        static registerGlobalEvent(): void;
        static unregisterGlobalEvent(): void;
        hideCalendarOnTab(e: any): void;
        initialize(): void;
        updateDateinTextBox(element: JQuery, newValue: Date, forceUpdate?: boolean): void;
        getCurrentDateFromInput(element: JQuery): Date;
        protected onScroll(e: UIEvent): void;
        showPopup(date?: Date): void;
        static updatePopupPosition(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface IDateTimeRangePickerControl extends ICalendarPopupBinding, IRangeSelectionBinding {
    }
    class DateTimeRangePickerControl extends CalendarPopup<IDateTimeRangePickerControl, IRangeCalendar> {
        protected validator: IDateRangeValidator;
        private selectedStartDate;
        private selectedEndDate;
        protected readonly inputs: JQuery;
        protected readonly inputStart: JQuery;
        protected readonly inputEnd: JQuery;
        notify(changeType: ChangeType): void;
        initializeCalendar(): void;
        private lastActiveInput;
        private updateAllreadySchedulled;
        updateSelectedDatesInCalendar(): void;
        initialize(): void;
        updateDateFromTextbox(forceUpdate?: boolean): void;
        destroy(): void;
        showPopup(date?: Date): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ICalendarPopupBinding extends ICalendarBaseBinding {
        closePopupOnSelectionComplete: KnockoutObservableOr<boolean>;
        formatString: string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    enum CalendarMode {
        Year = 0,
        Month = 1,
        Date = 2,
        DateTime = 3,
        Time = 4
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    enum ChangeType {
        Complete = 0,
        Partial = 1
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    enum DateRangeType {
        Year = 0,
        Month = 1,
        Date = 2,
        Hour = 3,
        Minute = 4
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    enum DisplayMode {
        Standard = 0,
        Extended = 1
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class DateValidatorBase {
        minDateSource: KnockoutObservableOr<string>;
        maxDateSource: KnockoutObservableOr<string>;
        restrictions: KnockoutObservableArray<KnockoutObservable<DateTimeRestriction>>;
        readonly minDate: Date;
        readonly maxDate: Date;
        constructor(minDate: KnockoutObservableOr<string>, maxDate: KnockoutObservableOr<string>, Restrictions: KnockoutObservableArray<KnockoutObservable<DateTimeRestriction>>);
        isDayOfWeekRestriction(restriction: DateTimeRestriction): restriction is DayOfWeekRestriction;
        isDateRangeRestriction(restriction: DateTimeRestriction): restriction is DateRangeRestriction;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class DateValidator extends DateValidatorBase implements IDateValidator {
        findFirstDateThatPassesRestrictions(date: Date, dateType: DateRangeType, originalDate: Date): any;
        isThereAnyValidPartInDate(date: Date, dateType: DateRangeType): boolean;
        doesDatePassAllRestrictions(date: Date, dateType: DateRangeType): {
            doesDatePassRestrictions: boolean;
            undecidedRestrictions: DateTimeRestriction[];
        };
        protected doesDatePassRestriction(date: Date, restriction: DateTimeRestriction, dateType: DateRangeType): boolean;
        protected isNumericRange1SubsetOfNumericRange(start1: number, end1: number, start2: number, end2: number): boolean;
        protected doesNumericRangesOverloap(start1: number, end1: number, start2: number, end2: number): boolean;
        protected splitDateInParts(date: Date, dateType: DateRangeType): {
            Dates: Date[];
            dateType: DateRangeType;
        };
        isYearInValidRange(date: Date): boolean;
        isMonthInValidRange(date: Date): boolean;
        isDayInValidRange(date: Date): boolean;
        isHourInValidRange(date: Date): boolean;
        isMinuteInValidRange(date: Date): boolean;
        isDateInValidRange(date: Date): boolean;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class DateRangeValidator extends DateValidator implements IDateRangeValidator {
        isRangeValid(startDate: Date, endDate: Date): boolean;
        doesRangePassRestriction(start: Date, end: Date, restriction: DateTimeRestriction): boolean;
        doesRangePassRangeRestriction(start: Date, end: Date, restriction: DateRangeRestriction): boolean;
        doesRangePassDayRestriction(start: Date, end: Date, restriction: DayOfWeekRestriction): boolean;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface IDateRangeValidator extends IDateValidator {
        isRangeValid(startDate: Date, endDate: Date): any;
        doesRangePassRestriction(start: Date, end: Date, restriction: DateTimeRestriction): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface IDateValidator {
        minDate: Date;
        maxDate: Date;
        restrictions: KnockoutObservableArray<KnockoutObservable<DateTimeRestriction>>;
        findFirstDateThatPassesRestrictions(date: Date, dateType: DateRangeType, originalDate: Date): any;
        isThereAnyValidPartInDate(date: Date, dateType: DateRangeType): any;
        doesDatePassAllRestrictions(date: Date, dateType: DateRangeType): {
            doesDatePassRestrictions: boolean;
            undecidedRestrictions: DateTimeRestriction[];
        };
        isYearInValidRange(date: Date): any;
        isMonthInValidRange(date: Date): any;
        isDayInValidRange(date: Date): any;
        isHourInValidRange(date: Date): any;
        isMinuteInValidRange(date: Date): any;
        isDateInValidRange(date: Date): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface DateTimePickerBaseBinding extends DateOrTimePickerBaseBinding {
        minDateTime: KnockoutObservable<string | Date>;
        maxDateTime: KnockoutObservable<string | Date>;
        restrictions: KnockoutObservableArray<KnockoutObservable<DateTimeRestriction>>;
    }
    abstract class DateTimePickerBase<T extends DateTimePickerBaseBinding> extends DateOrTimePickerBase<T> {
        initialize(): void;
        protected floorDate(date: Date): number;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface DateTimePickerBinding extends DateTimePickerBaseBinding {
        selectedDateTime: KnockoutObservable<string | Date>;
    }
    class DateTimePicker extends DateTimePickerBase<DateTimePickerBinding> {
        protected $textBox: JQuery;
        protected $datePicker: JQuery;
        protected $timePicker: JQuery;
        protected $focusSource: JQuery;
        protected selectedDate: KnockoutObservable<null | Date>;
        protected selectedTime: KnockoutObservable<null | Date>;
        protected minTime: KnockoutObservable<string | Date>;
        protected maxTime: KnockoutObservable<string | Date>;
        protected dateRestrictions: KnockoutObservableArray<KnockoutObservable<DateRestriction>>;
        protected timeRestrictions: KnockoutObservableArray<KnockoutObservable<TimeRestriction>>;
        initialize(): void;
        readonly selectedDateTime: Date;
        readonly date: Date;
        readonly time: Date;
        readonly minDateTime: Date;
        readonly maxDateTime: Date;
        protected readonly canUnselectDateOrTime: boolean;
        protected unselectDateOrTime(): void;
        protected onElementKeydown(e: JQueryKeyEventObject): void;
        protected onTextBoxKeydown(e: JQueryKeyEventObject): void;
        protected onToggleButtonClick(e: any): void;
        protected focusDatePicker(): void;
        protected focusTimePicker(): void;
        protected onSelectedDateTimeChange(dateTimeStr: string): void;
        protected selectDateTime(dateTime: Date): void;
        dateChanged(): void;
        timeChanged(): void;
        protected onDateOrTimeChange(): void;
        protected filterRestrictions(): void;
        protected filterDateRestrictions(): void;
        protected trimRestrictionStartDate(dateRestriction: DateRangeRestriction): DateRangeRestriction;
        protected filterTimeRestrictions(): void;
        protected trimRestrictionTimeRange(dateRestriction: DateRangeRestriction): TimeRangeRestriction;
        protected getNewDateRangeRestriction(): DateRangeRestriction;
        protected getNewTimeRangeRestriction(): TimeRangeRestriction;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface DraggableListBinding extends ControlBinding {
        maxItemsCount: KnockoutObservable<number>;
        itemDragged: KnockoutObservable<string>;
        groupName: KnockoutObservable<string>;
    }
    class DraggableList extends ControlBase<DraggableListBinding> {
        initialize(): void;
        private initChildEvents;
        private static draggedItemSourceCollection;
        private static draggedItem;
        private static draggedItemIndex;
        private static draggedItemGroupName;
        private static dragPositionIndicator;
        private static dragConfirmed;
        private static dragLeaving;
        private onDragOver;
        private onDrop;
        private static removeDragPositionIndicator;
        private createDragPositionIndicator;
        private getDataSource;
        private getChildren;
        private findChildByY;
        onDrag(e: JQueryEventObject): void;
        static getDataSourceFromExpression(viewModel: any): any;
        static onDragLeave(e: JQueryEventObject): void;
        static onDragLeaveCore(e: JQueryEventObject): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class DropDownButton extends ControlBase<ControlBinding> {
        protected $toggleButton: JQuery;
        protected $popupPanel: JQuery;
        protected popupPanel: PopupPanel;
        readonly isOpened: boolean;
        initialize(): void;
        togglePopup(open?: boolean): void;
        protected onElementFocus(e: JQueryEventObject): void;
        protected onElementFocusout(e: JQueryEventObject): void;
        protected onToggleButtonFocus(e: JQueryEventObject): void;
        protected onToggleButtonBlur(e: JQueryEventObject): void;
        protected onToggleButtonMousedown(e: JQueryEventObject): void;
        protected onToggleButtonClick(e: JQueryEventObject): void;
        protected onPopupPanelMousedown(e: JQueryMouseEventObject): void;
        protected onEnabledChange(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class DropDownList extends SelectorBase<DropDownListBinding> {
        protected $value: JQuery;
        protected $unselectButton: JQuery;
        protected $toggleButton: JQuery;
        protected $popup: JQuery;
        protected $resultsView: JQuery;
        protected selectedItem: KnockoutObservable<any>;
        protected popupPanel: PopupPanel;
        readonly isOpened: boolean;
        readonly hasValue: boolean;
        protected readonly canUnselectValue: boolean;
        protected readonly resultsView: ListView;
        initialize(): void;
        togglePopup(open?: boolean): void;
        selectFocusedItem(): void;
        protected onElementFocusin(e: JQueryEventObject): void;
        protected onElementFocusout(e: JQueryEventObject): void;
        protected onElementKeydown(e: JQueryEventObject): void;
        protected onUnselectButtonClick(e: JQueryEventObject): void;
        protected onToggleButtonClick(e: JQueryEventObject): void;
        protected onDataSourceChange(): void;
        protected onSelectedValueChange(value: any): void;
        protected onSearchResultSelected(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface DropDownListBinding extends SelectorBinding {
        selectedValue: KnockoutObservableOr<any>;
        allowUnselect: KnockoutObservableOr<boolean>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface EditableLiteralBinding extends ControlBinding {
        text: KnockoutObservable<string>;
    }
    class EditableLiteral extends ControlBase<EditableLiteralBinding> {
        $spanElement: JQuery;
        initialize(): void;
        keyAction(e: any): void;
        onKeyDown(e: JQueryEventObject): void;
        divClicked(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class UploaderBase extends ReactiveBase {
        protected uploadUrl: string;
        constructor(uploadUrl: string);
        abstract upload(files: File[]): any;
        start(handler: (files: File[]) => void): this;
        progress(handler: (progress: number) => void): this;
        complete(handler: (files: any[]) => void): this;
        error(handler: (errorMessage: string) => void): this;
        protected processResponse(responseText: string): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class FormDataUploader extends UploaderBase {
        upload(files: File[]): void;
        private sendForm;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class FileUpload extends ControlBase<FileUploadBinding> {
        protected $input: JQuery;
        protected previewUrls: string[];
        protected uploader: UploaderBase;
        readonly uploadData: UploadData;
        readonly uploadUrl: string;
        readonly areMultipleFilesAllowed: boolean;
        initialize(): void;
        protected onSelectFilesClick(e: JQueryEventObject): void;
        protected onDeleteFileClick(e: JQueryEventObject): void;
        protected onInputChange(e: JQueryEventObject): void;
        protected onElementDragenter(): void;
        protected onElementDragleave(): void;
        protected onElementDrop(e: JQueryEventObject): void;
        protected onEnabledChange(): void;
        protected onUploadStart(files: File[]): void;
        protected onUploadProgress(progress: number): void;
        protected onUploadComplete(results: any[]): void;
        protected onUploadError(error: string): void;
        protected uploadFiles(files: File[] | FileList): void;
        protected validateFiles(files: File[]): [File[], UploadFile[]];
        protected isFileTypeAllowed(file: File): boolean;
        protected isMaxSizeExceeded(file: File): boolean;
        protected createUploadFile(file: File, isFileTypeAllowed?: boolean, isMaxSizeExceeded?: boolean): UploadFile;
        protected createPreviewUrl(file: File): string;
        protected revokePreviewUrl(previewUrl: string): void;
        protected clearFiles(): void;
        protected getFileStyle(file: UploadFile): {
            [x: string]: boolean;
        };
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface FileUploadBinding extends ControlBinding {
        data: KnockoutObservable<UploadData>;
        uploadUrl: string;
        allowMultipleFiles: boolean;
        allowedFileTypes: string;
        maxFileSize: number;
        genericErrorText: string;
        uploadCompleted(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class SelectFilesButton extends ButtonBase<ControlBinding> {
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface UploadData {
        Progress: KnockoutObservable<number>;
        IsBusy: KnockoutObservable<boolean>;
        Files: KnockoutObservableArray<KnockoutObservable<UploadFile>>;
        ErrorMessage: KnockoutObservable<string>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface FileSize {
        Bytes: KnockoutObservable<number>;
        FormattedText: KnockoutObservable<string>;
    }
    interface UploadFile {
        FileId: KnockoutObservable<string>;
        FileName: KnockoutObservable<string>;
        FileSize: KnockoutObservable<FileSize>;
        PreviewUrl: KnockoutObservable<string>;
        IsUploaded: KnockoutObservable<boolean>;
        IsFileTypeAllowed: KnockoutObservable<boolean>;
        IsMaxSizeExceeded: KnockoutObservable<boolean>;
        IsAllowed: KnockoutObservable<boolean>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    import FilterCondition = DotVVM.BusinessPack.Filters.FilterCondition;
    class FilterBuilder extends ControlBase<FilterBuilderBinding> {
        initialize(): void;
        getFieldsSource(): any;
        getLogicsSource(): any;
        findFieldByName(fieldName: string): FilterBuilderField;
        protected onAddGroupClick(e: JQueryEventObject): void;
        protected onAddFilterClick(e: JQueryEventObject): void;
        protected onDeleteFilterClick(e: JQueryEventObject): void;
        protected onFieldNameChange(condition: FilterCondition): void;
        protected onFilterChange(): void;
        protected canAddNestedGroup(level: number): boolean;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    import FilterGroup = DotVVM.BusinessPack.Filters.FilterGroup;
    interface FilterBuilderBinding extends ControlBinding {
        filterGroup: KnockoutObservable<FilterGroup>;
        fields: FilterBuilderField[];
        maxOperatorDepth: number;
        andLogicText: string;
        notAndLogicText: string;
        orLogicText: string;
        notOrLogicText: string;
        changed(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface FilterBuilderField {
        Name: string;
        DisplayName: string;
        FormatString: string;
        IsNullable: boolean;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface FilterLogic {
        Type: string;
        DisplayName: string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface FilterOperator {
        Type: string;
        DisplayName: string;
        IsValueRequired: boolean;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    import FilterCondition = DotVVM.BusinessPack.Filters.FilterCondition;
    class FilterEditor extends FilterControlBase<FilterEditorBinding> {
        protected isValueRequired: KnockoutObservable<boolean>;
        protected wasValueRequired: boolean;
        protected isChanging: boolean;
        filter: FilterCondition;
        initialize(): void;
        readonly isOperatorSet: boolean;
        readonly isValueSet: boolean;
        applyFilter(): void;
        resetFilter(resetOperator?: boolean): void;
        protected isUpdateOnResetFilterRequired(activeFilter: FilterCondition): boolean;
        protected onFilterChange(): void;
        protected onOperatorChange(): void;
        protected onValueChange(): void;
        protected getOperatorsSource(): KnockoutObservableArray<FilterOperator>;
        protected createFilter(): FilterCondition;
        protected findActiveFilter(): FilterCondition;
        protected setIsValueRequired(): void;
        protected getDefaultOperatorIfNotAvailable(operator: string): string;
        protected getDefaultOperator(): string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    import FilterGroup = DotVVM.BusinessPack.Filters.FilterGroup;
    import FilterCondition = DotVVM.BusinessPack.Filters.FilterCondition;
    interface FilterEditorBinding extends ControlBinding {
        dataType: string;
        filter: KnockoutObservable<FilterCondition>;
        filterGroup: KnockoutObservable<FilterGroup>;
        fieldName: string;
        fieldDisplayName: string;
        allowNull: boolean;
        operators: FilterOperator[];
        formatString: string;
        changed(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    module DefaultGridViewRowClickDecorator {
        var selectedRowIndex: KnockoutObservable<{}>;
        function clickRow(row: any): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class GridView extends ItemsControlBase<GridViewBinding> {
        protected $table: JQuery;
        protected $columnHeaderRow: JQuery;
        protected $colgroup: JQuery;
        initialize(): void;
        readonly filterGroup: any;
        readonly isDataSourceEmpty: boolean;
        readonly isAnyFilterApplied: boolean;
        readonly isNotFilteredDataSourceEmpty: boolean;
        getInsertedRow(): any;
        isCellVisible(cell: HTMLElement): any;
        isColumnVisible(columnName: string, visible: KnockoutObservable<boolean> | boolean): boolean;
        getColumnWidth(columnName: string, width: KnockoutObservable<string> | string): string;
        isDataSourceSortedBy(expression: string, descending: boolean): boolean;
        isItemInEditMode(item: any): boolean;
        getColumnSettingsByName(columnName: string): GridViewColumnSettings;
        protected onAllowReorderColumnsChange(value: boolean): void;
        protected onUserSettingsChange(): void;
        protected enableColumnReordering(): void;
        protected disableColumnReordering(): void;
        protected sortColumnsSettings(): void;
        protected sortColumnsByDisplayOrder(): void;
        protected updateSettingsFromColumns(): void;
        protected moveColumnInRows(fromIndex: number, toIndex: number, excludeHeaderRow?: boolean): void;
        protected moveColumnInRow($row: JQuery, fromIndex: number, toIndex: number): void;
        protected moveColumnInColgroup(fromIndex: number, toIndex: number): void;
    }
}
declare module DotVVM.BusinessPack.Controls {
    interface GridViewBinding extends ItemsControlBinding {
        allowReorderColumns: KnockoutObservableOr<boolean>;
        inlineEditMode: "Disabled" | "SingleRow";
        userSettings: KnockoutObservable<GridViewUserSettings>;
        rowHasDetailBinding: string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface GridViewColumnSettings {
        ColumnName: KnockoutObservable<string>;
        DisplayOrder: KnockoutObservable<number>;
        DisplayText: KnockoutObservable<string>;
        Visible: KnockoutObservable<boolean>;
        Width: KnockoutObservable<number>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface GridViewKeyboardActionsDecoratorBinding extends ControlBinding {
        actionEnabled: KnockoutObservable<boolean>;
        rowElementSelector: KnockoutObservable<string>;
    }
    class GridViewKeyboardActionsDecorator extends ControlBase<GridViewKeyboardActionsDecoratorBinding> {
        initialize(): void;
        onKeyboardActionChange(action: number): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface GridViewUserSettings {
        ColumnsSettings: KnockoutObservableArray<KnockoutObservable<GridViewColumnSettings>>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class ReadonlySelector<TBinding extends ReadonlySelectorBinding> extends ItemsControlBase<TBinding> {
        private $literal;
        initialize(): void;
        protected getItemKeyBinding(): (item: any) => KnockoutObservableOr<any>;
        protected getItemValueBinding(): (item: any) => KnockoutObservableOr<any>;
        protected getItemTextBinding(): (item: any) => KnockoutObservableOr<string>;
        private onSelectedValueChanged;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ReadonlySelectorBinding extends ItemsControlBinding {
        selectedValue: KnockoutObservable<object>;
        itemKeyBinding(item: any): KnockoutObservableOr<any>;
        itemValueBinding(item: any): KnockoutObservableOr<any>;
        itemTextBinding(item: any): KnockoutObservableOr<string>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class GridViewUserSettingsEditor extends ControlBase<GridViewUserSettingsEditorBinding> {
        readonly columnsSettings: KnockoutObservableArray<KnockoutObservable<GridViewColumnSettings>>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface GridViewUserSettingsEditorBinding extends ControlBinding {
        userSettings: KnockoutObservable<GridViewUserSettings>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class HierarchyRepeater extends HierarchyItemsControlBase<HierarchyRepeaterBinding> {
        initialize(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface HierarchyRepeaterBinding extends HierarchyItemsControlBinding {
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface SvgCache {
        [key: string]: SVGSymbolElement;
    }
    interface SvgIconBinding extends ControlBinding {
        icon: KnockoutObservableOr<string>;
        spriteUrl: string;
    }
    abstract class SvgIconBase<TBinding extends SvgIconBinding> extends ControlBase<TBinding> {
        private static cachedSprites;
        private static loadingSprites;
        private static symbolCache;
        private previousAttributes;
        initialize(): void;
        protected onIconChange(icon: string): Promise<void>;
        protected ensureSpriteIsCached(): Promise<void>;
        protected refreshSvgIcon(): void;
        private cacheSymbolsFromSprite;
        protected getIconType(symbol: SVGSymbolElement): string;
        protected getCacheKey(iconType: string): string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class FAIcon extends SvgIconBase<SvgIconBinding> {
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class Icon extends SvgIconBase<SvgIconBinding> {
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class CropBox extends SelectionBox {
        protected options: CropBoxOptions;
        protected $imagePreview: JQuery;
        protected $originalImage: JQuery;
        protected $resizeGrips: JQuery;
        protected elementMovable: Movable;
        protected readonly hasForcedSize: boolean;
        protected readonly hasForcedRadius: boolean;
        constructor($element: JQuery, options: CropBoxOptions);
        reset(): void;
        getCropRectangle(): CropRectangle;
        loadCropRectangle({ Left, Top, Width, Height }: CropRectangle): void;
        loadRadius(radius: number): void;
        protected getDefaultOptions(): CropBoxOptions;
        protected onResizeGripMousedown(e: JQueryEventObject): void;
        protected shouldStartSelection(e: JQueryEventObject): boolean;
        protected refreshContents(): void;
        protected getForcedSize(): {
            width: number;
            height: number;
        };
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface CropBoxOptions extends SelectionBoxOptions {
        $imageCanvas: JQuery;
        forcedWidth?: number;
        forcedHeight?: number;
        forcedRadius?: number;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface CropRectangle {
        Left: KnockoutObservable<number>;
        Top: KnockoutObservable<number>;
        Width: KnockoutObservable<number>;
        Height: KnockoutObservable<number>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class ImageCrop extends ControlBase<ImageCropBinding> {
        isCroppingEnabled: KnockoutObservable<boolean>;
        protected $imageCanvas: JQuery;
        protected $image: JQuery;
        protected $cropCanvas: JQuery;
        protected $cropOverlay: JQuery;
        protected $cropBox: JQuery;
        protected $toolbar: JQuery;
        protected $toggle: JQuery;
        protected $rotateLeft: JQuery;
        protected $rotateRight: JQuery;
        protected $zoomIn: JQuery;
        protected $zoomOut: JQuery;
        protected $reset: JQuery;
        protected crop: CropBox;
        protected imageCanvasMovable: Movable;
        protected zoomTimeoutId: number;
        protected zoomStep: number;
        initialize(): void;
        rotate(angle: number): void;
        zoom(step: number, mouseOffset?: JQueryCoordinates): void;
        protected onWindowResize(e: JQueryEventObject): void;
        protected onElementMousewheel(e: JQueryEventObject): void;
        protected onImageLoad(e: JQueryEventObject): void;
        protected onToggleButtonClick(e: JQueryEventObject): void;
        protected onRotateButtonClick(angle: number, e: JQueryEventObject): void;
        protected onZoomButtonClick(step: number, e: JQueryEventObject): void;
        protected onResetClick(e: JQueryEventObject): void;
        protected onCropUpdate(): void;
        protected onCropChange(): void;
        protected loadOperations(): void;
        protected getAspectRatio(): number;
        protected fitAndCenterImage(raiseChanged: boolean): void;
        protected isSafeToFitAndCenterImage(): boolean;
        protected fitImage(raiseChanged: boolean): void;
        protected doesImageFit(): boolean;
        protected applyZoom(step: number, mouseOffset?: JQueryCoordinates): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ImageCropBinding extends ControlBinding {
        operations: KnockoutObservable<ImageOperations>;
        forcedCropWidth: number;
        forcedCropHeight: number;
        forcedCropRadius: number;
        aspectRatio: string;
        changed(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ImageOperations {
        Resize: KnockoutObservable<number>;
        Rotate: KnockoutObservable<number>;
        Crop: KnockoutObservable<CropRectangle>;
        Round: KnockoutObservable<number>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class ListView extends ItemsControlBase<ListViewBinding> {
        focusedItemsKeys: KnockoutObservableArray<any>;
        selectedItemsKeys: KnockoutObservableArray<any>;
        protected $list: JQuery;
        protected $selectionBox: JQuery;
        protected arrowHits: number;
        protected selection: SelectionBox;
        hasFocus: KnockoutObservable<boolean>;
        readonly hasValue: boolean;
        readonly isTilesView: boolean;
        readonly isListView: boolean;
        readonly columnLength: number;
        readonly rowLength: number;
        readonly pageSize: number;
        initialize(): void;
        focusItems(items: any[]): void;
        focusItem(item: any, clearOther?: boolean): void;
        isFocused(item: any): boolean;
        getFocusedItems(): KnockoutObservable<any>[];
        getSelectedItems(): KnockoutObservable<any>[];
        toggleItem(item: any): void;
        selectItems(items: any[], focusOnLast: boolean): void;
        selectItem(item: any, clearOther?: boolean): void;
        canBeItemAddedToSelectedValues(item: any, clearOther: boolean): boolean;
        isSelected(item: any): boolean;
        unselectItem(item: any): void;
        unselectAllItems(): void;
        unfocusAllItems(): void;
        protected onElementFocusin(e: JQueryEventObject): void;
        protected onElementFocusout(e: JQueryEventObject): void;
        protected onElementKeydown(e: JQueryKeyEventObject): void;
        protected onElementKeyup(e: JQueryKeyEventObject): void;
        protected onItemClick(e: JQueryEventObject): void;
        protected onSelectionUpdate(): void;
        protected onSelectionChange(): void;
        protected onDataSourceChange(): void;
        protected onSelectedValuesChange(values: any[]): void;
        protected focusOrSelectPrevItem(e: JQueryKeyEventObject): void;
        focusPrevItem(): void;
        protected focusOrSelectNextItem(e: JQueryKeyEventObject): void;
        focusNextItem(): void;
        protected focusOrSelectItemAbove(e: JQueryKeyEventObject): void;
        protected focusItemAbove(): void;
        protected focusOrSelectItemBelow(e: JQueryKeyEventObject): void;
        protected focusItemBelow(): void;
        protected focusOrSelectFirstItem(e: JQueryKeyEventObject): void;
        focusFirstItem(): void;
        protected selectItemOnOrUntilPrevPage(e: JQueryKeyEventObject): void;
        protected focusOrSelectLastItem(e: JQueryKeyEventObject): void;
        protected focusLastItem(): void;
        protected selectItemOnOrUntilNextPage(e: JQueryKeyEventObject): void;
        protected ensureFocusedItem(): void;
        protected selectItemsUntilPrev(): void;
        selectPrevItem(fromFocused: any): void;
        protected selectItemsUntilNext(): void;
        selectNextItem(fromFocused: any): void;
        protected selectItemsUntilAbove(): void;
        isItemEnabled(item: any): boolean;
        protected selectItemAbove(): void;
        protected selectItemOnPrevPage(): void;
        protected selectItemsUntilBelow(): void;
        protected selectItemBelow(): void;
        protected selectItemOnNextPage(): void;
        protected selectItemsUntilFirst(): void;
        selectFirstItem(): void;
        protected selectItemsUntilLast(): void;
        protected selectLastItem(): void;
        toggleFocusedItem(): void;
        protected selectItemsUntil(target: Element): void;
        selectFocusedItems(): void;
        protected findElementAbove($target: JQuery): HTMLElement;
        protected findElementOnPrevPage($target: JQuery): HTMLElement;
        protected findElementBelow($target: JQuery): HTMLElement;
        protected findElementOnNextPage($target: JQuery): HTMLElement;
        protected scrollToItem($item: JQuery): void;
        protected isOnFirstLine($item: JQuery): boolean;
        protected isOnLastLine($item: JQuery): boolean;
        protected getItemKeyBinding(): (item: any) => any;
        protected getItemValueBinding(): (item: any) => any;
        protected getItemStyle(item: any): {
            [x: string]: boolean;
        };
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ListViewBinding extends ItemsControlBinding {
        autoFocusFirstItem: boolean;
        toggleSelectionOnClick: KnockoutObservableOr<boolean>;
        displayMode: KnockoutObservableOr<"List" | "Tiles">;
        selectedValues: KnockoutObservableArray<KnockoutObservable<any>>;
        itemKeyBinding(item: any): KnockoutObservableOr<any>;
        itemValueBinding(item: any): KnockoutObservableOr<any>;
        itemEnabledBinding(item: any): KnockoutObservableOr<boolean>;
        maxSelectedValues: number;
        changed(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class BufferResolver {
        private textMask;
        private bufferOfInsertedChars;
        private readonly maxBufferIndex;
        constructor(textMask: TextMask, bufferOfInsertedChars: Array<string>);
        writeValuesToBufferWithCheck(values: Array<string>, startBufferIndex: number, endBufferIndex?: number): number;
        getFirstHardcodedString(): string;
        isMaxBufferIndex(index: number): boolean;
        shiftDelete(positionIndex: number): number;
        shiftBackspace(positionIndex: number): number;
        insertFunctionality: (positionIndex: number, char: string) => number;
        overtypeFunctionality: (positionIndex: number, char: string) => number;
        writeCharToBuffer(positionIndex: number, char: string): number;
        clearBufferOnIndexes(caretPosition: CaretIndexPosition): number;
        rearrangeBufferOfInsertedChars(): void;
        createStringFromAllBuffers(): string;
        addCharToBufferByIndex: (positionIndex: number, value: string) => number;
        writeValueToBufferByIndex(positionIndex: number, value: string): void;
        clearBuffer(): void;
        clearBufferFromIndex(index: number): void;
        getIndexOfFirstInsertableChar(): number;
        isBufferFull(): boolean;
        isBufferOfInsertedCharsEmpty(): boolean;
        checkRegexWithValueOnIndex(index: number, value: string): boolean;
        isHardCodedCharOnIndex(index: number): boolean;
        getHardCodedCharOnIndex(index: number): string;
        getRegexOnIndex(index: number): RegExp;
        getNextIndex(positionIndex: any): number;
        getPreviousIndex(positionIndex: any): number;
        getIndexOfLastFilledBufferItem(): number;
        getIndexOfFirstInsertableCharBefore: (positionIndex: number) => number;
        getIndexOfFirstInsertableCharAfter: (positionIndex: number) => number;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class CaretIndexPosition {
        private readonly _startIndex;
        private readonly _endIndex;
        constructor(startIndex: number, endIndex: number);
        isSelection: () => boolean;
        startIndex: () => number;
        endIndex: () => number;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface MaskPattern {
        ClientRegex: KnockoutObservable<string>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface MaskPatternDictionary {
        [char: string]: KnockoutObservable<MaskPattern>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class MaskedTextBox extends ControlBase<MaskedTextBoxBinding> {
        private lastCaretPosition;
        private bufferResolver;
        private patterns;
        initialize(): void;
        initPatterns: () => MaskPatternDictionary;
        createBufferResolver: (maskArray: string[]) => BufferResolver;
        listen: () => void;
        dropEvent: (e: any) => void;
        onElementChange(e: JQueryEventObject): void;
        pasteEvent: (e: any) => boolean;
        writeValuesWithCheck: ($element: JQuery, valuesToWrite: string[]) => void;
        onFocusEvent: (e: any) => void;
        blurEvent: (e: any) => void;
        getIndexOfLastFilledBufferItem: () => number;
        clearSelection: (caretIndexPosition: CaretIndexPosition) => void;
        checkIfInvaliOperation: (caretIndexPosition: CaretIndexPosition, keyCode: number) => boolean;
        removeChar: (caretIndexPosition: CaretIndexPosition, keyCode: number) => void;
        keydownEvent: (e: any) => void;
        keypressEvent: (e: JQueryKeyEventObject) => void;
        getActualCaretPosition: () => CaretIndexPosition;
        setCaretPosition: (lastCaretPosition: number) => void;
        writeBufferToElement: (bufferResolver: BufferResolver, lastCaretPosition: number) => void;
        cleanUpElement: () => void;
        cleanUpBufferAndElement: (bufferResolver: BufferResolver) => void;
        getRegexByKey: (key: string) => RegExp;
        getElementToMaskAsHtmlInput: () => HTMLInputElement;
        createDefaultPatterns: () => MaskPatternDictionary;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface MaskedTextBoxBinding extends ControlBinding {
        text: KnockoutObservableOr<string>;
        mask: string;
        patterns: KnockoutObservable<MaskPatternDictionary>;
        additionalPatterns: KnockoutObservable<MaskPatternDictionary>;
        changed(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class TextMask {
        private hardCodedCharsMask;
        private regexsMask;
        isRegexOnIndex(index: number): boolean;
        checkRegexWithValueOnIndex(index: number, value: string): boolean;
        getRegexOnIndex(index: number): RegExp;
        isHardCodedCharOnIndex(index: number): boolean;
        getHardCodedCharOnIndex(index: number): string;
        pushRegex(regexp: RegExp): void;
        pushHardCodedChar(hardcodedChar: string): void;
        getIndexOfFirstInsertableChar(): number;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class DialogButtonBase<TDialog extends DialogBase<any>> extends ButtonBase<ControlBinding> {
        initialize(): void;
        protected readonly dialog: TDialog;
        protected onElementClick(e: JQueryEventObject): void;
        protected abstract onClickAction(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class CloseDialogButton extends DialogButtonBase<DialogBase<any>> {
        onClickAction(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class DialogBase<TBinding extends DialogBinding> extends ControlBase<TBinding> {
        private focusInside;
        isDisplayed: boolean;
        protected readonly closeOnOutsideClick: boolean;
        protected readonly closeOnEscape: boolean;
        private _overlay;
        protected readonly overlay: HTMLElement;
        protected readonly showOverlay: boolean;
        protected isOverlayVisible(): boolean;
        protected readonly isTopMostOpenedDialog: boolean;
        protected static readonly topMostOppenedDialog: DialogBase<DialogBinding>;
        protected readonly $dialog: JQuery;
        readonly element: HTMLElement;
        readonly dialog: HTMLElement;
        protected sizeLimits: {
            minWidth: number;
            maxWidth: number;
            minHeight: number;
            maxHeight: number;
        };
        protected shiftKeyPressed: boolean;
        static openedDialogs: Array<DialogBase<DialogBinding>>;
        static escapeEventRegistered: boolean;
        initialize(): void;
        private isOutsideDialogElement;
        dispose(): void;
        static escapePressDetected(): void;
        protected outsideClickDetected(event: JQueryEventObject): void;
        protected close(): void;
        private fireClosedEvent;
        protected showOverlayOfTopMostOppenedDialog(): void;
        protected open(): void;
        static hideAllOverlays(): void;
        hideOverlay(): void;
        setOverflow(setHidden: any): void;
        showShowOverlay(): void;
        bringToFront(): void;
        protected changeVisibility(value: boolean): void;
        checkIfDialogIsNotOutsideOfViewport(): boolean;
        getOnScreenPosition(element: JQuery): {
            top: number;
            left: number;
        };
        pauseEvent(e: any): boolean;
        protected isInlineHeightSet(): boolean;
        protected isInlineWidthSet(): boolean;
        protected setInlineHeight(expression: string): void;
        protected setInlineWidth(expression: string): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface DialogBinding extends ControlBinding {
        isDisplayed: KnockoutObservableOr<boolean>;
        closeOnOutsideClick: KnockoutObservableOr<boolean>;
        closeOnEscape: KnockoutObservableOr<boolean>;
        showOverlay: KnockoutObservableOr<boolean>;
        closed(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    enum HorizontalAlignment {
        Left = "Left",
        Center = "Center",
        Right = "Right"
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class MaximizeDialogButton extends DialogButtonBase<Window> {
        onClickAction(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class ModalDialog extends DialogBase<ModalDialogBinding> {
        initialize(): void;
        protected initSize(): void;
        dispose(): void;
        readonly $dialog: JQuery;
        protected onWindowResize(ev: UIEvent): void;
        protected getHorizontalMargin(): number;
        protected updateWidth(): void;
        protected getVerticalMargin(): number;
        protected updateHeight(): void;
        protected addUnitOfMeasurement(value: number | KnockoutObservableOr<number>): string;
        protected updatePositioning(): void;
        protected updateVerticalPositioning(): void;
        protected removeVerticalPositioning(): void;
        protected updateHorizontalPositioning(): void;
        protected removeHorizontalPositioning(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ModalDialogBinding extends DialogBinding {
        widthRequest: KnockoutObservableOr<number>;
        heightRequest: KnockoutObservableOr<number>;
        horizontalAlignment: KnockoutObservableOr<HorizontalAlignment>;
        verticalAlignment: KnockoutObservableOr<VerticalAlignment>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class RestoreDialogButton extends DialogButtonBase<Window> {
        onClickAction(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    enum VerticalAlignment {
        Top = "Top",
        Center = "Center",
        Bottom = "Bottom"
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class Window extends DialogBase<WindowBinding> {
        protected width: string;
        protected height: string;
        protected readonly allowResize: boolean;
        protected readonly deathZoneSize: number;
        protected readonly initialPositionLeft: string;
        protected readonly initialPositionTop: string;
        protected readonly initialPositionBottom: string;
        protected readonly initialPositionRight: string;
        protected readonly allowMove: boolean;
        windowState: WindowState;
        readonly isMaximized: boolean;
        $header: JQuery;
        protected wasEverDisplayed: boolean;
        protected mousePositionOnLastDragUpdate: {
            x: number;
            y: number;
        };
        protected mousePositionOnMoveStarted: {
            x: number;
            y: number;
        };
        protected maxCoordinatesOnMoveStarted: {
            x: number;
            y: number;
        };
        protected aspectRatio: number;
        possitionBeforeMaximize: {
            x: string;
            y: string;
        };
        sizeBeforeMaximize: {
            height: string;
            width: string;
        };
        protected wasMoved: boolean;
        protected readonly isMooving: boolean;
        protected wasResized: boolean;
        protected readonly isResizing: boolean;
        initialize(): void;
        protected initSize(): void;
        protected setElementWidth(): void;
        protected setElementHeight(): void;
        moveToInitialPosition(force?: boolean): void;
        changeVisibility(value: boolean): void;
        outsideClickDetected(event: JQueryEventObject): void;
        calculateInitialPosition(): {
            x: number;
            y: number;
        };
        startMoveDrag(e: JQueryMouseEventObject): void;
        moveDrag(e: JQueryMouseEventObject): void;
        initSizeLimits(): void;
        protected initResizing(): void;
        startResizeDragDrag(e: JQueryMouseEventObject, direction: string): void;
        constrain(value: any, low: any, high: any): any;
        resizeDrag(e: JQueryMouseEventObject, direction: string, isHorizontalResizingMirrored?: boolean): void;
        protected getOffsetTop(elm: HTMLElement): {
            left: number;
            top: number;
        };
        applyDialogTransformations(newX?: any, newY?: any, newWidth?: any, newHeight?: any): void;
        toogleResizeHandles(display?: boolean): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface WindowBinding extends DialogBinding {
        allowMove: KnockoutObservableOr<boolean>;
        allowResize: KnockoutObservableOr<boolean>;
        deathZoneSize: KnockoutObservableOr<number>;
        width: KnockoutObservableOr<string>;
        height: KnockoutObservableOr<string>;
        minHeight: number;
        minWidth: number;
        initialPositionLeft: string;
        initialPositionTop: string;
        initialPositionBottom: string;
        initialPositionRight: string;
        windowState: KnockoutObservable<string>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    enum WindowState {
        Normal = 0,
        Maximized = 1
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class MultiSelect extends SelectorBase<MultiSelectBinding> {
        protected $textBox: JQuery;
        protected $popup: JQuery;
        protected $resultsView: JQuery;
        protected selectedItems: KnockoutObservableArray<KnockoutObservable<any>>;
        protected backspaceHits: number;
        protected popupPanel: PopupPanel;
        initialize(): void;
        readonly isOpened: boolean;
        readonly hasValue: boolean;
        protected readonly resultsView: ListView;
        protected readonly allowNewItems: boolean;
        togglePopup(open?: boolean): void;
        toggleFocusedItemOrCurrentText(): void;
        selectCurrentText(): void;
        unselectLastItem(): void;
        protected onElementMousedown(e: JQueryEventObject): void;
        protected onElementKeydown(e: JQueryEventObject): void;
        protected onElementKeyup(e: JQueryKeyEventObject): void;
        protected onUnselectButtonClick(e: JQueryEventObject): void;
        protected onTextBoxFocus(): void;
        protected onTextBoxBlur(): void;
        protected onTextBoxKeydown(e: JQueryEventObject): void;
        protected onTextBoxInput(e: JQueryKeyEventObject): void;
        protected onDataSourceChange(): void;
        protected onSelectedValuesChange(values: any[]): void;
        protected onSearchResultsChange(items: any[]): void;
        protected autoFocusItem(): void;
        protected getSelectedItemStyle(item: any): {
            [key: string]: boolean;
        };
        protected onSearchResultSelected(): any;
        protected resetText(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface MultiSelectBinding extends SelectorBinding {
        placeholder: string;
        selectedValues: KnockoutObservableArray<KnockoutObservable<any>>;
        allowNewItems: KnockoutObservableOr<boolean>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class NumericUpDown<TBinding extends NumericUpDownBinding> extends ControlBase<TBinding> {
        protected $textBox: JQuery;
        protected $increaseButton: JQuery;
        protected $decreaseButton: JQuery;
        protected textBoxValue: KnockoutObservable<number>;
        protected holdTimeoutId: number;
        protected changeIntervalId: number;
        protected hasPendingChanges: boolean;
        readonly value: number;
        readonly hasValue: boolean;
        initialize(): void;
        increase(): void;
        decrease(): void;
        protected onElementMousedown(): void;
        protected onElementKeydown(e: JQueryEventObject): void;
        protected onTextBoxFocus(): void;
        protected onTextBoxBlur(): void;
        protected onTextBoxKeydown(e: JQueryEventObject): void;
        protected onTextBoxChange(e: JQueryEventObject): void;
        protected onIncreaseButtonMousedown(e: JQueryEventObject): void;
        protected onDecreaseButtonMousedown(e: JQueryEventObject): void;
        protected onValueChange(value: number): void;
        protected setKeydownTimeout(increase: boolean, multiply: boolean): void;
        protected setMousedownTimeout(applyAction: (stepMultiplier: number) => void): void;
        protected applyIncrease(stepMultiplier: number): void;
        protected applyDecrease(stepMultiplier: number): void;
        protected updateValueFromTextBox(): void;
        protected computeValue(stepMultiplier: number): number;
        protected changeValue(newValue: number): void;
        protected clearTimeoutsAndIntervals(): void;
        protected getNumberOfDecimals(): number;
        protected postbackChangesIfPending(): void;
        protected validateValue(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface NumericUpDownBinding extends ControlBinding {
        value: KnockoutObservableOr<number>;
        minValue: KnockoutObservableOr<number>;
        maxValue: KnockoutObservableOr<number>;
        step: KnockoutObservableOr<number>;
        changed: () => void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface SelectionBoxOptions {
        $trigger?: JQuery;
        itemSelector?: string;
        tempAspectRatio?: number;
        aspectRatio?: number;
        restrictToParent?: boolean;
        minWidth?: number;
        minHeight?: number;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class RadioButtonList extends CheckableControlListBase<RadioButtonListBinding> {
        protected selectedItemKey: KnockoutObservable<any>;
        initialize(): void;
        selectItem(item: any): void;
        isSelected(item: any): boolean;
        protected onInputChange(e: JQueryEventObject): void;
        protected onSelectedValueChange(value: any): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface RadioButtonListBinding extends CheckableControlListBinding {
        selectedValue: KnockoutObservableOr<any>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface RatingBinding extends ControlBinding {
        value: KnockoutObservableOr<number>;
        maxValue: KnockoutObservableOr<number>;
        allowPreviewOnHover: KnockoutObservableOr<boolean>;
        allowHalfPoints: KnockoutObservableOr<boolean>;
        changed(): any;
    }
    class Rating<TBinding extends RatingBinding> extends ControlBase<TBinding> {
        protected previewValue: KnockoutObservable<number>;
        protected pointsSource: KnockoutComputed<KnockoutObservable<number>[]>;
        value: number;
        readonly isPreviewOnHoverEnabled: boolean;
        readonly isPreviewingValue: boolean;
        initialize(): void;
        protected onElementMouseleave(e: JQueryMouseEventObject): void;
        protected onPointMousemove(e: JQueryMouseEventObject): void;
        protected onPointClick(e: JQueryMouseEventObject): void;
        protected getValueFromOffset(e: JQueryMouseEventObject): number;
        protected getPointStyle(pointValue: number): {
            [x: string]: boolean;
        };
        private getPoints;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface WordRange {
        container: JQuery;
        offset: number;
    }
    interface SavedRange {
        startContainer: JQuery;
        startOffset: number;
        endContainer: JQuery;
        endOffset: number;
    }
    class TextRange {
        private range;
        constructor(native: Range);
        readonly isCollapsed: boolean;
        readonly startOffset: number;
        readonly startContainer: JQuery;
        readonly startNode: JQuery;
        readonly startChar: string;
        readonly endOffset: number;
        readonly endContainer: JQuery;
        readonly endNode: JQuery;
        readonly endChar: string;
        static get(): TextRange;
        static create(): TextRange;
        static restore(saved: SavedRange): boolean;
        static getLength(): number;
        static deleteContents(): void;
        static isInList(): boolean;
        static isInTableCell(): boolean;
        static isInAnchor(): boolean;
        static toString(): string;
        save(): SavedRange;
        commonAncestor(selector?: string): JQuery;
        startAncestor(selector?: string): JQuery;
        endAncestor(selector?: string): JQuery;
        singleAncestor(selector?: string): JQuery;
        deleteContents(): this;
        extractContents(): JQuery;
        splitOnEdges(): this;
        insert($node: JQuery | Node): JQuery;
        wrapContents($parent: JQuery | Node): JQuery;
        select($node: JQuery | Node): this;
        selectContents($node: JQuery | Node): this;
        selectWord(word: WordRange): this;
        startOn($node: JQuery | Node, offset: number): this;
        startBefore($node: JQuery | Node): this;
        startAfter($node: JQuery | Node): this;
        startOnWord(word: WordRange): this;
        endOn($node: JQuery | Node, offset: number): this;
        endBefore($node: JQuery | Node): this;
        endAfter($node: JQuery | Node): this;
        endOnWord(word: WordRange): this;
        collapseToStart(): this;
        collapseToEnd(): this;
        apply(): void;
        isInList(): boolean;
        isInTableCell(): boolean;
        isInAnchor(): boolean;
        isOnText(): boolean;
        getWordRange(): WordRange;
        getNextWordRange(): WordRange;
        getNextContents(): JQuery;
        getNodes(): Node[];
        getTexts(): Text[];
        getLength(): number;
        toString(): string;
        clone(): TextRange;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface SelectionEdge {
        path: number[];
        offset: number;
    }
    interface SavedSelection {
        start: SelectionEdge;
        end: SelectionEdge;
    }
    class TextSelection {
        static save($editor: JQuery): SavedSelection;
        static restore($editor: JQuery, { start, end }: SavedSelection): void;
        static isInEditor($editor: JQuery): number | boolean;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class InlineFormatBase {
        alternatives: InlineFormatBase[];
        constructor(alternatives?: InlineFormatBase[]);
        getState(nodes: Node[]): any;
        getNodeState(node: Node): any;
        toggle(nodes: Node[], value?: string): void;
        toggleAfter(node: Node, value?: string): Text;
        apply(nodes: Node[], value?: string): void;
        applyAfter(node: Node, value?: string): Text;
        remove(nodes: Node[], value?: string): void;
        removeAfter(node: Node, value?: string): Text;
        protected abstract getWrapperSelector(value?: string): string;
        protected abstract createWrapper(value?: string): JQuery;
        protected shouldSkip(node: Node): boolean;
        protected areFormatted(nodes: Node[], value?: string): boolean;
        protected isFormatted(node: Node, value?: string): boolean;
        protected isSuitableWrapper($node: JQuery | Node, value?: string): boolean;
        protected findWrapper(node: Node, value?: string): any;
        protected splitWrappers(nodes: Node[], value?: string): void;
        protected mergeWrapperSelectors(value?: string): string;
        protected wrap(node: Node, value?: string): void;
        protected unwrap($wrapper: JQuery): void;
    }
    class TagInlineFormat extends InlineFormatBase {
        tagName: string;
        constructor(tagName: string, alternatives?: InlineFormatBase[]);
        protected getWrapperSelector(): string;
        protected createWrapper(): JQuery;
    }
    class ClassInlineFormat extends InlineFormatBase {
        tagName: string;
        className: string;
        constructor(tagName: string, className: string, alternatives?: InlineFormatBase[]);
        protected getWrapperSelector(): string;
        protected createWrapper(): JQuery;
    }
    class StyleInlineFormat extends InlineFormatBase {
        tagName: string;
        styleName: string;
        constructor(tagName: string, styleName: string, alternatives?: InlineFormatBase[]);
        getNodeState(node: Node): any;
        protected getWrapperSelector(value: string): string;
        protected createWrapper(value: string): JQuery;
    }
    class StyleValueInlineFormat extends StyleInlineFormat {
        styleValue: string;
        constructor(tagName: string, styleName: string, styleValue: string, alternatives?: InlineFormatBase[]);
        getNodeState(node: Node): boolean;
        protected getWrapperSelector(): string;
        protected createWrapper(): JQuery;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface UndoStep {
        contents: JQuery;
        selection: SavedSelection;
    }
    class ContentEditable extends ReactiveBase {
        $input: JQuery;
        private oldHtml;
        private oldSelection;
        private inlineFormats;
        private history;
        html: string;
        readonly isEnabled: boolean;
        constructor($input: JQuery);
        enable(): void;
        disable(): void;
        change(handler: () => void): void;
        update(): any;
        update(handler: () => void): any;
        undo(): void;
        recordUndo(): void;
        redo(): void;
        cut(): void;
        copy(): void;
        paste(): void;
        formatInline(format: string, value?: string): void;
        bold(): void;
        italic(): void;
        underline(): void;
        strikethrough(): void;
        subscript(): void;
        superscript(): void;
        backColor(color: string): void;
        foreColor(color: string): void;
        fontName(fontName: string): void;
        fontSize(fontSize: number): void;
        formatBlock(format: string): void;
        align(position: "Center" | "Full" | "Left" | "Right"): void;
        alignLeft(): void;
        alignCenter(): void;
        alignRight(): void;
        alignJustify(): void;
        indent(): void;
        outdent(): void;
        nextTableCell(): void;
        prevTableCell(): void;
        insertLine(): void;
        insertBlock(): void;
        toggleList(type: "ul" | "ol"): void;
        toggleOrderedList(): void;
        toggleUnorderedList(): void;
        autoInsertList(): boolean;
        insertListItem(): void;
        insertParagraph(): void;
        insertTable(rows: number, columns: number): void;
        deleteTable(): void;
        insertTableRow(beforeCurrent?: boolean): void;
        deleteTableRow(): void;
        insertTableColumn(beforeCurrent?: boolean): void;
        deleteTableColumn(): void;
        insertImage(url: string, description?: string, width?: number, height?: number): void;
        insertLink(urlOrEmail: string, text?: string): void;
        getLinkUri(): string;
        removeLink(): void;
        autoInsertLink(): boolean;
        insertText(text: string): void;
        clearFormatting(): void;
        selectAll(): void;
        delete(): void;
        isCommandEnabled(command: string): boolean;
        isCommandVisible(command: string): boolean;
        getCommandState(command: string): any;
        private registerInlineFormats;
        private onDocumentSelectionChange;
        private onInputFocus;
        private onInputBlur;
        private onInputKeydown;
        private onInputKeyup;
        private onInputPaste;
        private onInputDrop;
        private onHistoryApply;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class RichTextBox extends ControlBase<RichTextBoxBinding> {
        editor: ContentEditable;
        isUndoEnabled: KnockoutObservable<boolean>;
        isRedoEnabled: KnockoutObservable<boolean>;
        isClearFormattingEnabled: KnockoutObservable<boolean>;
        isBoldActive: KnockoutObservable<boolean>;
        isItalicActive: KnockoutObservable<boolean>;
        isUnderlineActive: KnockoutObservable<boolean>;
        isStrikethroughActive: KnockoutObservable<boolean>;
        isSuperscriptActive: KnockoutObservable<boolean>;
        isSubscriptActive: KnockoutObservable<boolean>;
        isNumberedListActive: KnockoutObservable<boolean>;
        isBulletedListActive: KnockoutObservable<boolean>;
        hyperlinkUri: KnockoutObservable<string>;
        isRemoveLinkVisible: KnockoutObservable<boolean>;
        imageUri: KnockoutObservable<string>;
        imageDescription: KnockoutObservable<string>;
        isInsertTableVisible: KnockoutObservable<boolean>;
        tableColumns: KnockoutObservable<number>;
        tableRows: KnockoutObservable<number>;
        isAlignLeftActive: KnockoutObservable<boolean>;
        isAlignCenterActive: KnockoutObservable<boolean>;
        isAlignRightActive: KnockoutObservable<boolean>;
        isAlignJustifyActive: KnockoutObservable<boolean>;
        paragraphStyle: KnockoutObservable<string>;
        fontName: KnockoutObservable<string>;
        protected $toolbar: JQuery;
        protected $editor: JQuery;
        initialize(): void;
        protected onElementMousedown(): void;
        protected onElementFocusin(): void;
        protected onElementFocusout(): void;
        protected onToolbarMousedown(e: JQueryEventObject): void;
        protected onEditorChange(): void;
        protected onEditorUpdate(): void;
        protected onParagraphStyleChange(): void;
        protected onFontNameChange(): void;
        protected onSaveHyperlinkClick(): void;
        protected onSaveImageClick(): void;
        protected onSaveTableClick(): void;
        protected onEnabledChange(): void;
        protected toggleTabIndex(): void;
        protected onHtmlChange(html: string): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface RichTextBoxBinding extends ControlBinding {
        html: KnockoutObservableOr<string>;
        onChanged(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface RichTextDocument {
        Contents: RichTextContent[];
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class RichTextEngine {
        readonly $element: JQuery;
        private _htmlLoader;
        private _htmlObserver;
        private _htmlBuilder;
        private _document;
        private _schema;
        constructor($element: JQuery, modules: RichTextModule[]);
        load(document: RichTextDocument): void;
        loadHtml(html: string | JQuery): void;
        save(): RichTextDocument;
        saveHtml(): string;
        reload(): void;
        protected htmlChanged(mutations: MutationRecord[]): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class RichTextHtmlBuilder {
        protected schema: RichTextSchema;
        constructor(schema: RichTextSchema);
        buildHtml(contents: RichTextContent[], includeCid?: boolean): string;
        buildDom(contents: RichTextContent[], includeCid?: boolean, cidPath?: string): JQuery;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class RichTextHtmlLoader {
        protected schema: RichTextSchema;
        constructor(schema: RichTextSchema);
        loadContents(html: string | JQuery): RichTextContent[];
        updateContents(contents: RichTextContent[], mutations: MutationRecord[]): RichTextContent[];
        protected replaceContent(cid: any, $element: JQuery, contents: RichTextContent[]): void;
        protected removeContent(cid: any, $element: JQuery, contents: RichTextContent[]): void;
        protected insertContent(cid: any, $element: JQuery, contents: RichTextContent[]): void;
        protected resolveContents(cid: any, contents: RichTextContent[]): [number, RichTextContent[]];
        protected findContents(nodes: NodeList): HTMLElement[];
        protected getHtmlContainer(html: string | JQuery): JQuery;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class RichTextHtmlObserver {
        protected readonly $element: JQuery;
        protected callback: MutationCallback;
        private _observer;
        constructor($element: JQuery, callback: MutationCallback);
        observe(): void;
        disconnect(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class RichTextSchema {
        private _allowedContentTypes;
        private _allowedAttributeTypes;
        allowContentType(type: RichTextContentType): void;
        allowAttributeType(type: RichTextAttributeType): void;
        findContentTypeFor($element: JQuery): RichTextContentType;
        findAttributeTypesFor($element: JQuery): RichTextAttributeType[];
        isAllowedContentWrapper($element: JQuery): boolean;
        getContentType(name: string): RichTextContentType;
        getAttributeType(name: string): RichTextAttributeType;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class AttributeHtmlBuilderBase {
        protected schema: RichTextSchema;
        constructor(schema: RichTextSchema);
        buildElement(attribute: RichTextAttribute): JQuery;
        protected abstract getElementName(attribute: RichTextAttribute): any;
    }
}
declare module DotVVM.BusinessPack.Controls {
    class HyperlinkAttributeHtmlBuilder extends AttributeHtmlBuilderBase {
        buildElement(attribute: HyperlinkAttribute): JQuery;
        protected getElementName(): string;
    }
}
declare module DotVVM.BusinessPack.Controls {
    class ImageAttributeHtmlBuilder extends AttributeHtmlBuilderBase {
        buildElement(attribute: ImageAttribute): JQuery;
        protected getElementName(): string;
    }
}
declare module DotVVM.BusinessPack.Controls {
    class InlineFormatAttributeHtmlBuilder extends AttributeHtmlBuilderBase {
        private _elementName;
        constructor(_elementName: string, schema: RichTextSchema);
        protected getElementName(): string;
    }
}
declare module DotVVM.BusinessPack.Controls {
    class LineBreakAttributeHtmlBuilder extends AttributeHtmlBuilderBase {
        protected getElementName(): string;
    }
}
declare module DotVVM.BusinessPack.Controls {
    class QuoteAttributeHtmlBuilder extends AttributeHtmlBuilderBase {
        buildElement(attribute: QuoteAttribute): JQuery;
        protected getElementName(): string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class AttributeHtmlLoaderBase {
        protected schema: RichTextSchema;
        constructor(schema: RichTextSchema);
        abstract loadAttribute($element: JQuery, offset: number): RichTextAttribute;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class HyperlinkAttributeHtmlLoader extends AttributeHtmlLoaderBase {
        loadAttribute($element: JQuery, offset: number): HyperlinkAttribute;
        protected getHyperlinkUri($element: JQuery): string;
        protected getHyperlinkTarget($element: JQuery): string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class ImageAttributeHtmlLoader extends AttributeHtmlLoaderBase {
        loadAttribute($element: JQuery, offset: number): ImageAttribute;
        protected getImageUri($element: JQuery): string;
        protected getImageDescription($element: JQuery): string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class InlineFormatAttributeHtmlLoader extends AttributeHtmlLoaderBase {
        protected attributeType: string;
        constructor(attributeType: string, schema: RichTextSchema);
        loadAttribute($element: JQuery, offset: number): RichTextAttribute;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class LineBreakAttributeHtmlLoader extends AttributeHtmlLoaderBase {
        loadAttribute($element: JQuery, offset: number): LineBreakAttribute;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class QuoteAttributeHtmlLoader extends AttributeHtmlLoaderBase {
        loadAttribute($element: JQuery, offset: number): QuoteAttribute;
        protected getQuoteSource($element: JQuery): string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface BoldAttribute extends RichTextAttribute {
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface HyperlinkAttribute extends RichTextAttribute {
        Uri: string;
        Target?: string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ImageAttribute extends RichTextAttribute {
        Uri: string;
        Description?: string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ItalicAttribute extends RichTextAttribute {
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface LineBreakAttribute extends RichTextAttribute {
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface QuoteAttribute extends RichTextAttribute {
        Source?: string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface RichTextAttribute {
        Type: string;
        Start: number;
        End: number;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface RichTextAttributeType {
        name: string;
        priority?: number;
        builder: AttributeHtmlBuilderBase;
        elementSelector: string | (($element: JQuery) => boolean);
        loader: AttributeHtmlLoaderBase;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface StrikethroughAttribute extends RichTextAttribute {
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface SubscriptAttribute extends RichTextAttribute {
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface SuperscriptAttribute extends RichTextAttribute {
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface UnderlineAttribute extends RichTextAttribute {
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class ContentHtmlBuilderBase {
        protected schema: RichTextSchema;
        constructor(schema: RichTextSchema);
        addElement(cid: string, content: RichTextContent, $dom: JQuery): JQuery;
        buildElement(cid: string, content: RichTextContent): JQuery;
        protected abstract getElementName(content: RichTextContent): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class FlowContentHtmlBuilderBase extends ContentHtmlBuilderBase {
        buildElement(cid: string, content: FlowContent): JQuery;
        protected appendFlowContents($flow: JQuery, content: FlowContent): void;
        protected buildAttributeElement(text: string, index: number, attributes: RichTextAttribute[]): JQuery;
        protected nextIsNotIntersecting(attribute: RichTextAttribute, nextAttribute: RichTextAttribute): boolean;
        protected nextIsNested(attribute: RichTextAttribute, nextAttribute: RichTextAttribute): boolean;
        protected nextHasHigherPriority(attributeType: RichTextAttributeType, nextAttributeType: RichTextAttributeType): boolean;
        protected compareAttributes(a: RichTextAttribute, b: RichTextAttribute): number;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class ParagraphContentHtmlBuilder extends FlowContentHtmlBuilderBase {
        buildElement(cid: string, content: ParagraphContent): JQuery;
        protected getElementName(content: RichTextContent): string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class BlockquoteContentHtmlBuilder extends ParagraphContentHtmlBuilder {
        addElement(cid: string, content: BlockquoteContent, $dom: JQuery): JQuery;
        protected isSuitableBlockquote(content: BlockquoteContent, $blockquote: JQuery): boolean;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class FormattedContentHtmlBuilder extends FlowContentHtmlBuilderBase {
        protected getElementName(): string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class HeadingContentHtmlBuilder extends ParagraphContentHtmlBuilder {
        protected getElementName(content: HeadingContent): string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class ListContentHtmlBuilder extends FlowContentHtmlBuilderBase {
        private _listElementName;
        constructor(_listElementName: string, schema: RichTextSchema);
        addElement(cid: string, content: ListContent, $dom: JQuery): JQuery;
        protected isSuitableList(content: ListContent, $list: JQuery): boolean;
        protected getElementName(): string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class TableContentHtmlBuilder extends ContentHtmlBuilderBase {
        private _htmlBuilder;
        constructor(schema: RichTextSchema);
        buildElement(cid: string, content: TableContent): JQuery;
        protected appendCells(cid: string, $thead: JQuery, $tbody: JQuery, content: TableContent): void;
        protected getElementName(): string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class ContentHtmlLoaderBase {
        protected schema: RichTextSchema;
        constructor(schema: RichTextSchema);
        abstract loadContent($element: JQuery): RichTextContent;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class FlowContentHtmlLoaderBase extends ContentHtmlLoaderBase {
        protected loadAttributes($element: JQuery): RichTextAttribute[];
        protected mergeWithParent(attribute: RichTextAttribute, previousAttributes: RichTextAttribute[]): boolean;
        protected canBeMerged(attribute1: RichTextAttribute, attribute2: RichTextAttribute): boolean;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class ParagraphContentHtmlLoaderBase extends FlowContentHtmlLoaderBase {
        protected getIndentationLevel($element: JQuery): number;
        protected getAlignment($element: JQuery): string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class BlockquoteContentHtmlLoader extends ParagraphContentHtmlLoaderBase {
        loadContent($element: JQuery): BlockquoteContent;
        protected getQuoteSource($element: JQuery): string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class FormattedContentHtmlLoader extends FlowContentHtmlLoaderBase {
        loadContent($element: JQuery): FormattedContent;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class HeadingContentHtmlLoader extends ParagraphContentHtmlLoaderBase {
        loadContent($element: JQuery): HeadingContent;
        protected getHeadingLevel($element: JQuery): number;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class ListContentHtmlLoader extends FlowContentHtmlLoaderBase {
        loadContent($element: JQuery): ListContent;
        protected getListType($element: JQuery): "BulletedList" | "NumberedList";
        protected getListStyle($element: JQuery): string;
        protected getIndentationLevel($element: JQuery): number;
        protected getItemText($element: JQuery): string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class ParagraphContentHtmlLoader extends ParagraphContentHtmlLoaderBase {
        loadContent($element: JQuery): ParagraphContent;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class TableContentHtmlLoader extends ContentHtmlLoaderBase {
        private _htmlLoader;
        constructor(schema: RichTextSchema);
        loadContent($element: JQuery): TableContent;
        protected hasHeaderRow($thead: JQuery, $rows: JQuery): boolean;
        protected getTableCells($rows: JQuery): TableCell[][];
        protected getCellContents($cell: JQuery): string | RichTextContent[];
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface BlockquoteContent extends ParagraphContent {
        Source?: string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface FlowContent extends RichTextContent {
        Text: string;
        Attributes?: RichTextAttribute[];
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface FormattedContent extends FlowContent {
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface HeadingContent extends ParagraphContent {
        Level: number;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ListContent extends FlowContent {
        Style?: string;
        IndentationLevel?: number;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ParagraphContent extends FlowContent {
        Alignment?: string;
        IndentationLevel?: number;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface RichTextContent {
        Type: string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface RichTextContentType {
        name: string;
        allowedCommands?: string[];
        isHierarchical?: boolean;
        builder: ContentHtmlBuilderBase;
        wrapperSelector?: string | (($element: JQuery) => boolean);
        elementSelector: string | (($element: JQuery) => boolean);
        loader: ContentHtmlLoaderBase;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface TableCell {
        ColSpan?: number;
        RowSpan?: number;
        Contents: string | RichTextContent[];
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface TableContent extends RichTextContent {
        HasHeaderRow: boolean;
        Cells: TableCell[][];
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class HyperlinkModule implements RichTextModule {
        initialize(schema: RichTextSchema): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class ImageModule implements RichTextModule {
        initialize(schema: RichTextSchema): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class InlineFormatModule implements RichTextModule {
        initialize(schema: RichTextSchema): void;
        protected isBoldAttribute($element: JQuery): boolean;
        protected isItalicAttribute($element: JQuery): boolean;
        protected isUnderlineAttribute($element: JQuery): boolean;
        protected isStrikethroughAttribute($element: JQuery): boolean;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class ParagraphModule implements RichTextModule {
        initialize(schema: RichTextSchema): void;
        protected isParagraphContent($element: JQuery): boolean;
        protected isBlockquoteContent($element: JQuery): boolean;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface RichTextModule {
        initialize(schema: RichTextSchema): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class SourceCodeModule implements RichTextModule {
        initialize(schema: RichTextSchema): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class TableModule implements RichTextModule {
        initialize(schema: RichTextSchema): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    abstract class SelectableBaseCheckbox<TBinding extends SelectableCheckBoxBaseBinding> extends ControlBase<TBinding> {
        protected getItemValueBinding(): (item: any) => KnockoutObservableOr<any>;
        protected getItemKeyBinding(): (item: any) => KnockoutObservableOr<any>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface SelectableCheckBoxBinding extends SelectableCheckBoxBaseBinding {
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class SelectableCheckBox extends SelectableBaseCheckbox<SelectableCheckBoxBinding> {
        initialize(): void;
        isSelected(item: any): KnockoutObservableArray<any>;
        getItemKey(item: any): any;
        protected onSelectionRowsChanged(newValue: any): void;
        protected onInputChange(e: JQueryEventObject): void;
        private toggleSelectedClass;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface SelectableCheckBoxBaseBinding extends ControlBinding {
        selectedRows: KnockoutObservableArray<KnockoutObservableOr<any>>;
        itemValueBinding(item: any): KnockoutObservableOr<any>;
        itemKeyBinding(item: any): KnockoutObservableOr<any>;
        changed(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class SelectableHeaderCheckBox extends SelectableBaseCheckbox<SelectableHeaderCheckBoxBinding> {
        private inputClickUpdating;
        initialize(): void;
        private dataSourceChanged;
        private selectedRowChanged;
        private onInputClick;
        private getDataSourceItems;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface SelectableHeaderCheckBoxBinding extends SelectableCheckBoxBaseBinding {
        dataSource: KnockoutObservableArray<KnockoutObservable<any>> | KnockoutObservable<any>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface SliderBaseBinding extends ControlBinding {
        minValue: KnockoutObservableOr<number>;
        maxValue: KnockoutObservableOr<number>;
        step: KnockoutObservableOr<number>;
        changed(): any;
    }
    abstract class SliderBase<TBinding extends SliderBaseBinding> extends ControlBase<TBinding> {
        $lineValue: JQuery;
        $lineEnd: JQuery;
        updateAllReaduScheduled: boolean;
        protected holdTimeoutId: number;
        protected readonly maxValue: number;
        protected readonly minValue: number;
        protected readonly enabled: boolean;
        protected readonly step: number;
        initialize(): void;
        abstract update(forceUpdate: boolean): any;
        startDrag(e: JQueryEventObject, handle: JQuery): void;
        handleDraged(e: JQueryMouseEventObject, handle: JQuery): any;
        constrain(value: any, low: any, high: any): any;
        getPercentageRepresentationOfValue(selectedValue: number): number;
        getPercentageRepresentationOfWidth(width: number): number;
        setWidthOfValueLine(value: number): void;
        setWidthOfRightLine(value: number): void;
        getWidthInPixelsFromValue(value: number): number;
        moveHandler(value: number, handler: JQuery): void;
        calculateCurrentValueFromPossition(currentPossition: number): number;
        getStepWidth(): number;
        fireChangedEvent(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface RangeSliderBinding extends SliderBaseBinding {
        selectedMinValue: KnockoutObservableOr<number>;
        selectedMaxValue: KnockoutObservableOr<number>;
    }
    class RangeSlider extends SliderBase<RangeSliderBinding> {
        $handleStart: JQuery;
        $handleEnd: JQuery;
        $lineStart: JQuery;
        startValueAtLastPostBack: number;
        endValueAtLastPostBack: number;
        protected selectedStartValue: number;
        protected selectedEndValue: number;
        update(forceUpdate?: boolean): void;
        checkRangeAndRepairItIfNessesary(): void;
        initialize(): void;
        protected onHandleFocus(e: JQueryEventObject): void;
        protected onHandleBlur(e: JQueryEventObject): void;
        protected onHandleKeydown(e: JQueryKeyEventObject): void;
        protected moveClosestHandler(e: JQueryEventObject): void;
        protected setKeydownTimeout(increase: boolean, selectedValue: number, updateValue: (newValue: number) => void): void;
        handleDraged(e: JQueryMouseEventObject, handle: JQuery): number;
        updateHandles(): void;
        updateHandlesAndSelectedValue(selectedValueMin: number, selectedValueMax: number): void;
        setWidthOfLeftLine(value: number): void;
        fireChangedEvent(): void;
        protected toggleTabIndex(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface SliderBinding extends SliderBaseBinding {
        selectedValue: KnockoutObservableOr<number>;
    }
    class Slider extends SliderBase<SliderBinding> {
        $handle: JQuery;
        valueAtLastPostback: number;
        protected selectedValue: number;
        initialize(): void;
        protected onHandleFocus(e: JQueryEventObject): void;
        protected onHandleBlur(e: JQueryEventObject): void;
        protected onHandleKeydown(e: JQueryKeyEventObject): void;
        protected setKeydownTimeout(increase: boolean): void;
        moveHandleOnClick(e: any): void;
        update(forceUpdate: boolean): void;
        updateHandleAndValue(newValue: number): void;
        handleDraged(e: JQueryMouseEventObject, handle: JQuery): number;
        fireChangedEvent(): void;
        checkValueAndRepairItIfNessesary(): void;
        protected toggleTabIndex(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class SwitchButton extends ButtonBase<SwitchButtonBinding> {
        initialize(): void;
        protected onElementClick(e: JQueryEventObject): void;
        protected onCheckedChange(checked: boolean): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface SwitchButtonBinding extends ButtonBinding {
        checked: KnockoutObservableOr<boolean>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class TabControl extends ItemsControlBase<TabControlBinding> {
        $header: JQuery;
        activeTabKey: any;
        initialize(): void;
        protected onHeaderItemClick(e: JQueryEventObject): void;
        protected setActiveTab($headerItem: JQuery): void;
        protected onActiveTabKeyChange(activeTabKey: any): void;
        protected onDataSourceChange(): void;
        protected updateTabIsActiveBinding(): void;
        protected isTabActive(key: KnockoutObservableOr<any>): boolean;
        protected getItemKeyBinding(): (item: any) => any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface TabControlBinding extends ItemsControlBinding {
        tabs: TabItem[];
        tabKeyBinding(item: any): KnockoutObservableOr<any>;
        tabIsActiveBinding(item: any): KnockoutObservableOr<boolean>;
        activeTabKey: KnockoutObservableOr<any>;
        activeTabChanged: () => void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface TabItem {
        Key: any;
        HeaderText: string;
        Enabled: boolean;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class TextBox extends ControlBase<TextBoxBinding> {
        initialize(): void;
        protected onElementFocus(): void;
        protected onElementBlur(): void;
        protected onElementChange(e: JQueryEventObject): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface TextBoxBinding extends ControlBinding {
        changed(): any;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface TextViewBinding extends ControlBinding {
        text: KnockoutObservableOr<string>;
        hyperlinkTarget: string;
    }
    class TextView extends ControlBase<TextViewBinding> {
        initialize(): void;
        protected onTextChanged(text: string): void;
        protected generateHtml(text: string): string;
        protected generateHtmlLinks(text: string): string;
        protected generateHtmlParagraphs(text: string): string;
        protected generateHtmlLineBreaks(text: string): string;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface TimePickerBaseBinding extends DateOrTimePickerBaseBinding {
        minTime: KnockoutObservable<string | Date>;
        maxTime: KnockoutObservable<string | Date>;
        restrictions: KnockoutObservableArray<KnockoutObservable<TimeRestriction>>;
    }
    abstract class TimePickerBase<T extends TimePickerBaseBinding> extends DateOrTimePickerBase<T> {
        initialize(): void;
        protected floorDate(date: Date): number;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface TimePickerBinding extends TimePickerBaseBinding {
        selectedTime: KnockoutObservable<string | Date>;
    }
    class TimePicker extends TimePickerBase<TimePickerBinding> {
        private $dialToFocus;
        protected $textBox: JQuery;
        protected $timeDial: JQuery;
        protected $dials: JQuery;
        protected restrictions: TimeRangeRestriction[];
        initialize(): void;
        readonly selectedTime: Date;
        protected readonly currentEnabledTime: Date;
        protected isTimeOfNull(time: Date): boolean;
        protected readonly canUnselectDateOrTime: boolean;
        protected unselectDateOrTime(): void;
        protected onToggleButtonClick(e: JQueryEventObject): void;
        protected onElementFocusin(e: JQueryEventObject): void;
        protected focusDial(dial?: JQuery): void;
        protected toRestrictionsObservable(data: any): any;
        protected onElementFocusout(e: JQueryEventObject): void;
        protected onElementKeydown(e: JQueryKeyEventObject): void;
        protected onTextBoxKeydown(e: JQueryKeyEventObject): void;
        selectTime(time: Date): void;
        protected selectCurrentEnabledTimeIfNull(): void;
        isTimeSelected(time: Date): boolean;
        getHourItem(diff: number, time?: Date): Date;
        getMinuteItem(diff: number, time?: Date): Date;
        getSecondItem(diff: number, time?: Date): Date;
        focusNextDial(): void;
        focusPrevDial(): void;
        selectNextItem(): void;
        selectPrevItem(): void;
        protected onDialMousedown(e: JQueryEventObject): void;
        protected onDialMousemove(e: JQueryEventObject): void;
        protected onDialMousewheel(e: JQueryEventObject): void;
        protected onDialItemClick(e: JQueryEventObject): void;
        protected onSelectedTimeChange(timeStr: string): void;
        protected onRestrictionsChange(r: KnockoutObservable<TimeRangeRestriction>[]): void;
        protected isTimeEnabled(time: Date, floor?: (time: Date) => number): boolean;
        isHourEnabled(time: Date): boolean;
        isMinuteEnabled(time: Date): boolean;
        isSecondEnabled(time: Date): boolean;
        protected findEnabledTime(startTime: Date, isEnabledFunction: (time: Date) => boolean, stepFunction: (value: number) => Date, diff: number, maxLoopCount: number): Date;
        protected findEnabledHour(diff: number, step: number, time?: Date): Date;
        protected findEnabledMinute(diff: number, step: number, time?: Date): Date;
        protected findEnabledSecond(diff: number, step: number, time?: Date): Date;
        protected onPopupOpen(): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class ToggleButton extends ButtonBase<ToggleButtonBinding> {
        initialize(): void;
        protected onElementClick(e: JQueryEventObject): void;
        protected onCheckedChange(checked: boolean): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface ToggleButtonBinding extends ButtonBinding {
        checked: KnockoutObservableOr<boolean>;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    class Toolbar extends ControlBase<ControlBinding> {
        protected isGroupVisible(group: HTMLElement): boolean;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface TooltipBinding extends ControlBinding {
        isDisplayed: KnockoutObservable<boolean> | boolean;
    }
    class Tooltip extends ControlBase<TooltipBinding> {
        protected $trigger: JQuery;
        isDisplayed: boolean;
        initialize(): void;
        protected onTriggerMouseenter(e: JQueryMouseEventObject): void;
        protected onTriggerMouseleave(e: JQueryMouseEventObject): void;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    type LoadChildrenMode = "Shallow" | "Deep";
    class TreeView extends HierarchyItemsControlBase<TreeViewBinding> {
        private loadChildrenMode;
        protected focusedItemKey: KnockoutObservable<any>;
        protected expandedItemsKeys: KnockoutObservableArray<any>;
        protected selectedItemsKeys: KnockoutObservableArray<any>;
        protected loadingItemsKeys: KnockoutObservableArray<any>;
        protected hasFocus: KnockoutObservable<boolean>;
        readonly hasValue: boolean;
        initialize(): void;
        expandPathToItem(item: any): void;
        expandItem(item: any): void;
        collapseItem(item: any): void;
        isExpanded(item: any): boolean;
        isLoading(item: any): boolean;
        isParentLoading(item: any): boolean;
        focusItem(item: any): void;
        isFocused(item: any): boolean;
        getFocusedItem(): KnockoutObservable<any>;
        toggleItem(item: any): void;
        selectItems(items: any[], clearOther?: boolean): void;
        selectItem(item: any, clearOther?: boolean): void;
        unselectItems(items: any[]): void;
        unselectItem(item: any): void;
        canBeSelected(item: any): boolean;
        isSelected(item: any): boolean;
        hasChildren(item: any): boolean;
        protected onElementFocusin(e: JQueryEventObject): void;
        protected onElementFocusout(e: JQueryEventObject): void;
        protected onElementKeydown(e: JQueryKeyEventObject): void;
        protected onExpandClick(e: JQueryEventObject): void;
        protected onCollapseClick(e: JQueryEventObject): void;
        protected onCheckBoxChange(e: JQueryEventObject): void;
        protected getRelatedItemsToCheck(item: any): any[];
        protected getParentsToCheck(item: any): any[];
        protected getDescendantsToCheck(item: any): any[];
        protected onLabelMousedown(e: JQueryEventObject): void;
        protected onLabelClick(e: JQueryEventObject): void;
        protected onLabelDblClick(e: JQueryEventObject): void;
        protected onDataSourceChange(): void;
        protected onSelectedValuesChange(values: any[]): void;
        protected expandFocusedItemOrFocusOnChildItem(): void;
        protected expandFocusedItem(): void;
        protected collapseFocusedItemOrFocusOnParentItem(): void;
        protected collapseFocusedItem(): void;
        protected focusOnParentItem(): void;
        protected focusPrevItem(): void;
        protected focusNextItem(): void;
        protected focusOnChildItem(): void;
        protected focusOnFirstItem(): void;
        protected toggleFocusedItem(): void;
        protected canBeChecked(item: any): boolean;
        protected areOtherItemsSelected(items: any[]): boolean;
        protected findPrevVisibleItem($target: JQuery): HTMLElement;
        protected findNextVisibleItem($target: JQuery): HTMLElement;
        protected areAllOtherChildrenSelected(parent: any, item: any): boolean;
        protected isAnyDescendantSelected(item: any): boolean;
        protected canLoadChildren(item: any): boolean;
        protected shouldLoadChildren(item: any): boolean;
        protected populateItem(item: any, children: any[]): void;
        protected scrollToItem($item: JQuery): void;
        protected getParentTop($list: JQuery, $item: JQuery): number;
        protected getItemKeyBinding(): (item: any) => any;
        protected getItemValueBinding(): (item: any) => any;
        protected getCheckState(item: any): boolean;
        protected getItemStyle(item: any): {
            [x: string]: boolean;
        };
        protected getLabelStyle(item: any): {
            [x: string]: boolean;
        };
        private getLoadChildrenMode;
    }
}
declare namespace DotVVM.BusinessPack.Controls {
    interface TreeViewBinding extends HierarchyItemsControlBinding {
        selectedValues: KnockoutObservableArray<KnockoutObservable<any>>;
        itemKeyBinding(item: any): KnockoutObservableOr<any>;
        itemValueBinding(item: any): KnockoutObservableOr<any>;
        itemIsExpandedBinding(item: any): KnockoutObservableOr<boolean>;
        itemHasChildrenBinding(item: any): KnockoutObservableOr<boolean>;
        checkBoxMode: KnockoutObservableOr<"Visible" | "VisibleOnLeafs" | "Hidden">;
        autoCheckChildren: KnockoutObservableOr<boolean>;
        loadChildren(item: any): Promise<DotvvmAfterPostBackEventArgs>;
        changed(): any;
    }
}
declare namespace DotVVM.BusinessPack.Filters {
    interface FilterBase {
        Type: KnockoutObservable<string>;
    }
}
declare namespace DotVVM.BusinessPack.Filters {
    interface FilterCondition extends FilterBase {
        FieldName: KnockoutObservable<string>;
        FieldDisplayName: KnockoutObservable<string>;
        Operator: KnockoutObservable<string>;
        FormatString: KnockoutObservable<string>;
        Value: KnockoutObservable<any>;
    }
}
declare namespace DotVVM.BusinessPack.Filters {
    interface FilterGroup extends FilterBase {
        Logic: KnockoutObservable<string>;
        Filters: KnockoutObservableArray<KnockoutObservable<FilterBase>>;
    }
}
