/**
 * Copyright (c) 2011-2013 by Andrew Mustun. All rights reserved.
 * 
 * This file is part of the QCAD project.
 *
 * QCAD is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * QCAD is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with QCAD.
 */
// Auto generated by Testing Dashboard
// File        : scripts/Draw/Line/Line2P/Tests/LinesSnapEnd.js
// Timestamp   : 2011-02-11 13:35:05
// Description : Lines drawn with end snap

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function LinesSnapEnd() {
    TdbTest.call(this, 'scripts/Draw/Line/Line2P/Tests/LinesSnapEnd.js');
}

LinesSnapEnd.prototype = new TdbTest();

LinesSnapEnd.prototype.test00 = function() {
    qDebug('running LinesSnapEnd.test00()...');
    this.setUp();
    this.clickOnWidget('MainWindow::MainToolsPanel::LineToolsPanelButton');
    this.clickOnWidget('MainWindow::LineToolsPanel::Line2PButton');
    this.zoomTo(-28.95, -21.449999999999996, 28.950000000000003, 21.450000000000006);
    var p = new RVector(-20, 10);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.zoomTo(-28.95, -21.449999999999996, 28.950000000000003, 21.450000000000006);
    var p = new RVector(-10, 10);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonPress, new QPoint(179, 141), Qt.RightButton, 2, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonRelease, new QPoint(179, 141), Qt.RightButton, 0, 0);
    this.zoomTo(-28.95, -21.449999999999996, 28.950000000000003, 21.450000000000006);
    var p = new RVector(-20, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.zoomTo(-28.95, -21.449999999999996, 28.950000000000003, 21.450000000000006);
    var p = new RVector(-10, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonPress, new QPoint(181, 231), Qt.RightButton, 2, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonRelease, new QPoint(181, 231), Qt.RightButton, 0, 0);
    this.zoomTo(-28.95, -21.449999999999996, 28.950000000000003, 21.450000000000006);
    var p = new RVector(-20, -10);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.zoomTo(-28.95, -21.449999999999996, 28.950000000000003, 21.450000000000006);
    var p = new RVector(-10, -10);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonPress, new QPoint(188, 316), Qt.RightButton, 2, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonRelease, new QPoint(188, 316), Qt.RightButton, 0, 0);
    this.zoomTo(-28.95, -21.449999999999996, 28.950000000000003, 21.450000000000006);
    var p = new RVector(10, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.zoomTo(-28.95, -21.449999999999996, 28.950000000000003, 21.450000000000006);
    var p = new RVector(20, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonPress, new QPoint(489, 214), Qt.RightButton, 2, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonRelease, new QPoint(489, 214), Qt.RightButton, 0, 0);
    this.zoomTo(-28.95, -21.449999999999996, 28.950000000000003, 21.450000000000006);
    var p = new RVector(10, -10);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.zoomTo(-28.95, -21.449999999999996, 28.950000000000003, 21.450000000000006);
    var p = new RVector(20, -10);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonPress, new QPoint(455, 336), Qt.RightButton, 2, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonRelease, new QPoint(455, 336), Qt.RightButton, 0, 0);
    this.zoomTo(-28.95, -21.449999999999996, 28.950000000000003, 21.450000000000006);
    var p = new RVector(10, -20);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.zoomTo(-28.95, -21.449999999999996, 28.950000000000003, 21.450000000000006);
    var p = new RVector(20, -20);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonPress, new QPoint(480, 391), Qt.RightButton, 2, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonRelease, new QPoint(480, 391), Qt.RightButton, 0, 0);
    this.clickOnWidget('MainWindow::SnapToolsPanel::SnapEndButton');
    this.zoomTo(-28.95, -21.449999999999996, 28.950000000000003, 21.450000000000006);
    var p = new RVector(-10, 10);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.zoomTo(-28.95, -21.449999999999996, 28.950000000000003, 21.450000000000006);
    var p = new RVector(10, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonPress, new QPoint(305, 251), Qt.RightButton, 2, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonRelease, new QPoint(304, 251), Qt.RightButton, 0, 0);
    this.zoomTo(-28.95, -21.449999999999996, 28.950000000000003, 21.450000000000006);
    var p = new RVector(-10, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.zoomTo(-28.95, -21.449999999999996, 28.950000000000003, 21.450000000000006);
    var p = new RVector(10, -10);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonPress, new QPoint(277, 309), Qt.RightButton, 2, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonRelease, new QPoint(277, 309), Qt.RightButton, 0, 0);
    this.zoomTo(-28.95, -21.449999999999996, 28.950000000000003, 21.450000000000006);
    var p = new RVector(-10, -10);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.zoomTo(-28.95, -21.449999999999996, 28.950000000000003, 21.450000000000006);
    var p = new RVector(10, -20);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonPress, new QPoint(342, 349), Qt.RightButton, 2, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonRelease, new QPoint(342, 349), Qt.RightButton, 0, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonPress, new QPoint(262, 306), Qt.RightButton, 2, 0);
    this.sendMouseEventToGv(QEvent.MouseButtonRelease, new QPoint(262, 306), Qt.RightButton, 0, 0);
    this.verifyDrawing('LinesSnapEnd_000.dxf');
    this.tearDown();
    qDebug('finished LinesSnapEnd.test00()');
};
