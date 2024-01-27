<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <table border="1">
            <xsl:for-each select="CATALOG/PLANT">
                <!-- <xsl:sort select="ZONE"/> -->
                <xsl:if test="PRICE &lt; 5">
                    <tr>
                        <td>
                            <xsl:value-of select="ZONE"/>
                        </td>
                        <td>
                            <xsl:value-of select="PRICE"/>
                        </td>
                        <td>
                            <xsl:value-of select="COMMON"/>
                        </td>
                        <td>
                            <xsl:value-of select="COMMON/@type"/>
                        </td>
                        <td>
                            <xsl:value-of select="BOTANICAL"/>
                        </td>
                    </tr>
                </xsl:if>
            </xsl:for-each>
        </table>
    </xsl:template>
</xsl:stylesheet>