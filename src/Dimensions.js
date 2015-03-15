/* 
 * Copyright (C) 2015 Sean
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


var Point = (function () {
    "use strict";
    function Point(x, y) {
        this.set(x || 0, y || 0);
    }

    Point.prototype.set = function (x, y) {
        this.x = x;
        this.y = y;
    };

    Point.prototype.copy = function (p) {
        if (p) {
            this.x = p.x;
            this.y = p.y;
        }
    };

    Point.prototype.clone = function () {
        return new Point(this.x, this.y);
    };

    Point.prototype.toString = function () {
        return fmt("(x:$1, y:$2)", this.x, this.y);
    };

    return Point;
})();

var Size = (function () {
    "use strict";
    function Size(width, height) {
        this.set(width || 0, height || 0);
    }

    Size.prototype.set = function (width, height) {
        this.width = width;
        this.height = height;
    };

    Size.prototype.copy = function (s) {
        if (s) {
            this.width = s.width;
            this.height = s.height;
        }
    };

    Size.prototype.clone = function () {
        return new Size(this.width, this.height);
    };

    Size.prototype.toString = function () {
        return fmt("<w:$1, h:$2>", this.width, this.height);
    };

    return Size;
})();

var Rectangle = (function () {
    "use strict";
    function Rectangle(x, y, width, height) {
        this.point = new Point(x, y);
        this.size = new Size(width, height);

        Object.defineProperties(this, {
            x: {
                get: function () {
                    return this.point.x;
                },
                set: function (x) {
                    this.point.x = x;
                }
            },
            width: {
                get: function () {
                    return this.size.width;
                },
                set: function (width) {
                    this.size.width = width;
                }
            },
            right: {
                get: function () {
                    return this.point.x + this.size.width;
                },
                set: function (right) {
                    this.point.x = right - this.size.width;
                }
            },
            y: {
                get: function () {
                    return this.point.y;
                },
                set: function (y) {
                    this.point.y = y;
                }
            },
            height: {
                get: function () {
                    return this.size.height;
                },
                set: function (height) {
                    this.size.height = height;
                }
            },
            bottom: {
                get: function () {
                    return this.point.y + this.size.height;
                },
                set: function (bottom) {
                    this.point.y = bottom - this.size.height;
                }
            }
        });
    }

    Rectangle.prototype.set = function (x, y, width, height) {
        this.point.set(x, y);
        this.size.set(width, height);
    };

    Rectangle.prototype.copy = function (r) {
        if (r) {
            this.point.copy(r.point);
            this.size.copy(r.size);
        }
    };

    Rectangle.prototype.clone = function () {
        return new Rectangle(this.point.x, this.point.y, this.size.width, this.size.height);
    };

    Rectangle.prototype.toString = function () {
        return fmt("[$1 x $2]", this.point.toString(), this.size.toString());
    };

    return Rectangle;
})();