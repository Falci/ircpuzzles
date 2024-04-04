const PLUS_1 = (v) => v + 1;
const TIMES_3 = (v) => v * 3;

path = (a, b, v = (v) => v) => {
  a.push({
    node: b,
    value: v,
  });
  b.push({
    node: a,
    value: v,
  });
};

class Map {
  _1 = [];
  _2 = [];
  _3 = [];
  _4 = [];
  _5 = [];
  _6 = [];
  _7 = [];
  _8 = [];
  _9 = [];
  _10 = [];
  _11 = [];
  _12 = [];
  _13 = [];
  _14 = [];
  _15 = [];
  _16 = [];

  A = [];
  B = [];
  C = [];
  D = [];
  E = [];
  F = [];
  G = [];
  H = [];
  I = [];

  L = [];
  Z = [];

  constructor(parent) {
    this.parent = parent;
    this.level = parent ? parent.level + 1 : 0;

    if (this.level > 3) {
      return;
    }

    this.a = new Map(this);
    this.b = new Map(this);
    this.c = new Map(this);

    path(this.L, this.c._10, TIMES_3);
    path(this.Z, this.a._12, TIMES_3);

    path(this.A, this._1, TIMES_3);
    path(this.A, this.a._1, PLUS_1);
    path(this.A, this.B);
    path(this.B, this._15);
    path(this.B, this._16);
    path(this.C, this.a._14);
    path(this.C, this._14, PLUS_1);
    path(this.C, this._11, PLUS_1);
    path(this.D, this.a._11);
    path(this.D, this._13);
    path(this.D, this.H);
    path(this.E, this._3, PLUS_1);
    path(this.E, this.a._5);
    path(this.E, this.F);
    path(this.F, this.G);
    path(this.F, this._12);
    path(this.G, this.b._7);
    path(this.G, this.c._1);
    path(this.H, this._10, TIMES_3);
    path(this.H, this._8);
    path(this.I, this._7);
    path(this.I, this.a._3, TIMES_3);
    path(this.I, this.c._6);

    path(this._2, this.a._4, TIMES_3);
    path(this._4, this.b._1, PLUS_1);
    path(this._5, this.b._4, TIMES_3);
    path(this._6, this.b._8, PLUS_1);
    path(this._9, this.b._3, TIMES_3);

    path(this.a._8, this.b._16, PLUS_1);
    path(this.a._9, this.c._13, PLUS_1);
    path(this.a._10, this.a._16, TIMES_3);

    path(this.b._11, this.c._4, PLUS_1);
    path(this.b._14, this.c._15, TIMES_3);

    path(this.c._7, this.c._8, TIMES_3);
  }
}

new Map(0);
