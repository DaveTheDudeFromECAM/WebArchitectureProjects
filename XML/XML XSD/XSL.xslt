<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
            <body>
                <xsl:apply-templates select="Recipe" />
            </body>
        </html>
    </xsl:template>
    <xsl:template match="title">
            <H1><strong><xsl:value-of select="." /></strong></H1>
    </xsl:template>
    <xsl:template match="autor">
        <strong>Recette proposée par <xsl:value-of select="Firstname"/><xsl:text> </xsl:text><xsl:value-of select="Lastname"/></strong>
    </xsl:template>
    <xsl:template match="description">
            <p><xsl:value-of select="." /></p>
    </xsl:template>
    <xsl:template match="guide">
            <h2><strong>GUIDE DE PRÉPARATION : </strong></h2>
            <ul>
                <xsl:for-each select="Time">
                    <xsl:if test="Preparation"><li>Preparation : <xsl:value-of select="Preparation/."/><xsl:text> </xsl:text><xsl:value-of select="Preparation/@unity"/></li></xsl:if>
                    <xsl:if test="Cooking"><li>Cooking : <xsl:value-of select="Cooking/."/><xsl:text> </xsl:text><xsl:value-of select="Cooking/@unity"/></li></xsl:if>
                    <xsl:if test="rest"><li>Repos : <xsl:value-of select="rest/."/><xsl:text> </xsl:text><xsl:value-of select="rest/@unity"/></li></xsl:if>
                </xsl:for-each>
                <xsl:if test="difficulty"><li>difficulté : <xsl:value-of select="difficulty/."/></li></xsl:if>
                <xsl:if test="people"><li>Pour : <xsl:value-of select="people/."/> Pers.</li></xsl:if>
            </ul>
    </xsl:template>
    <xsl:template match="Ingredients">
            <h2><strong> INGRÉDIENTS : </strong></h2>
            <ul><xsl:for-each select="Ingredient">
                    <xsl:choose>
                        <xsl:when test="@unity='number'"><li><xsl:value-of select="." /><xsl:text> </xsl:text><xsl:value-of select="@name" /></li></xsl:when>
                        <xsl:when test="@unity='spoon'"><li><xsl:value-of select="." /> c. à <xsl:value-of select="@name" /></li></xsl:when>
                        <xsl:otherwise><li><xsl:value-of select="." /><xsl:text> </xsl:text><xsl:value-of select="@unity" /> de <xsl:value-of select="@name" /></li></xsl:otherwise>
                    </xsl:choose>
            </xsl:for-each></ul>
    </xsl:template>
    <xsl:template match="Preperation">
            <h2><strong>PRÉPARATION : </strong></h2>
            <xsl:for-each select="Step">
                <p>ÉTAPE <xsl:value-of select="position()"/> : <xsl:value-of select="." /></p>
            </xsl:for-each>
    </xsl:template>
    <xsl:template match="dietetic">
        <h2><strong> DIETETIQUE : </strong></h2>
        <p>Valeur nutritionnelle pour <xsl:value-of select="portion/."/><xsl:value-of select="portion/@unity"/>: <xsl:value-of select="Nutritional_value/."/><xsl:value-of select="Nutritional_value/@unity"/></p>
    </xsl:template>
    <xsl:template match="tips">
        <h2><strong> ASTUCES : </strong></h2>
        <p><xsl:value-of select="." /></p>
    </xsl:template>
</xsl:stylesheet>